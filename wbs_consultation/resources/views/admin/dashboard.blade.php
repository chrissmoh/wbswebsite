<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WBS Consultation Admin Dashboard</title>
    <style>
        :root { --blue:#0ea5e9; --deep:#0f172a; --red:#be123c; --bg:#f8fafc; --line:#dbeafe; }
        * { box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: var(--bg); margin: 0; color: #1f2937; }
        .container { max-width: 1220px; margin: 0 auto; padding: 24px; }
        .top { display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:20px; }
        .brand { display:flex; align-items:center; gap:12px; }
        .brand img { width:52px; height:52px; border-radius:8px; border:1px solid var(--line); background:#fff; }
        h1 { margin:0 0 4px; font-size: 28px; color: var(--deep); }
        .subtitle { color:#475569; margin:0; }
        .meta { font-size: 13px; color: #475569; background:#fff; border:1px solid var(--line); border-radius:10px; padding:10px 12px; }
        .cards { display:grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap:12px; margin-bottom:14px; }
        .card { background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px; }
        .card h3 { margin:0; font-size:13px; color:#0369a1; text-transform: uppercase; letter-spacing: .03em; }
        .card p { margin:7px 0 0; font-size:28px; font-weight:700; color:var(--deep); }
        .mini-stats { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; margin-bottom:14px; }
        .mini-card { background:#fff; border:1px solid var(--line); border-radius:12px; padding:12px; }
        .mini-card h4 { margin:0; font-size:12px; text-transform:uppercase; color:#64748b; letter-spacing:.03em; }
        .mini-card p { margin:5px 0 0; font-size:22px; font-weight:700; color:var(--deep); }
        .grid { display:grid; grid-template-columns: 1fr 1fr; gap:14px; }
        .panel { background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px; overflow:auto; }
        .panel h3 { margin:0 0 10px; color:var(--deep); }
        table { width:100%; border-collapse: collapse; font-size:14px; }
        th, td { padding:9px; border-bottom:1px solid #e5e7eb; text-align:left; white-space:nowrap; }
        th { color:#0f172a; background:#eff6ff; }
        .inline-form { display:flex; align-items:center; gap:6px; }
        .inline-form select { border:1px solid #cbd5e1; border-radius:8px; padding:4px 6px; font-size:12px; }
        .inline-form button { border:1px solid #0ea5e9; background:#0ea5e9; color:#fff; border-radius:8px; padding:4px 8px; font-size:12px; cursor:pointer; }
        .inline-form button:hover { background:#0284c7; border-color:#0284c7; }
        .tag { display:inline-block; padding: 3px 8px; border-radius: 999px; font-size: 12px; font-weight: 600; }
        .tag.published { background:#dcfce7; color:#166534; }
        .tag.draft { background:#fee2e2; color:#991b1b; }
        .api { margin-top:14px; background:#fff1f2; border:1px solid #fecdd3; padding:12px; border-radius:10px; color:#9f1239; }
        a { color: #0369a1; text-decoration: none; }
        a:hover { text-decoration: underline; }
        @media (max-width: 1100px) { .cards { grid-template-columns: repeat(3, minmax(0, 1fr)); } .grid { grid-template-columns: 1fr; } }
        @media (max-width: 700px) { .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); } .top { flex-direction:column; align-items:flex-start; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="top">
            <div class="brand">
                <img src="/images/wbs-logo.svg" alt="WBS Logo">
                <div>
                    <h1>WBS Consultation Dashboard</h1>
                    <p class="subtitle">Full website backend: inquiries, internships, publications, trainings, news and addresses.</p>
                </div>
            </div>
            <div class="meta">
                API: <strong>/api</strong> |
                Health: <strong>/api/health</strong>
            </div>
        </div>

        <div class="cards">
            <div class="card"><h3>Contact Inquiries</h3><p>{{ $counts['contact_inquiries'] }}</p></div>
            <div class="card"><h3>Internship Applications</h3><p>{{ $counts['internship_applications'] }}</p></div>
            <div class="card"><h3>News Posts</h3><p>{{ $counts['news_posts'] }}</p></div>
            <div class="card"><h3>Publications</h3><p>{{ $counts['publications'] }}</p></div>
            <div class="card"><h3>Training Programs</h3><p>{{ $counts['training_programs'] }}</p></div>
            <div class="card"><h3>Office Addresses</h3><p>{{ $counts['office_addresses'] }}</p></div>
        </div>

        <div class="mini-stats">
            <div class="mini-card"><h4>Visit Client Requests</h4><p>{{ $inquiryStats['visit_client'] }}</p></div>
            <div class="mini-card"><h4>Admissions Inquiries</h4><p>{{ $inquiryStats['admissions'] }}</p></div>
            <div class="mini-card"><h4>Other Inquiries</h4><p>{{ $inquiryStats['other'] }}</p></div>
        </div>

        <div class="grid">
            <div class="panel">
                <h3>Latest Contact Inquiries</h3>
                <table>
                    <thead><tr><th>Name</th><th>Email</th><th>Subject</th><th>Status</th><th>Manage</th></tr></thead>
                    <tbody>
                        @forelse($latestInquiries as $item)
                            <tr>
                                <td>{{ $item->full_name }}</td>
                                <td>{{ $item->email }}</td>
                                <td>{{ $item->subject }}</td>
                                <td>{{ $item->status ?? 'new' }}</td>
                                <td>
                                    <form class="inline-form" method="POST" action="{{ route('admin.inquiries.status', $item) }}">
                                        @csrf
                                        <select name="status">
                                            @foreach(['new', 'in_progress', 'resolved', 'closed'] as $status)
                                                <option value="{{ $status }}" @selected(($item->status ?? 'new') === $status)>{{ $status }}</option>
                                            @endforeach
                                        </select>
                                        <button type="submit">Save</button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr><td colspan="5">No inquiries yet.</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <div class="panel">
                <h3>Latest Internship Applications</h3>
                <table>
                    <thead><tr><th>Name</th><th>University</th><th>Email</th><th>Status</th><th>Manage</th></tr></thead>
                    <tbody>
                        @forelse($latestInternships as $item)
                            <tr>
                                <td>{{ $item->full_name }}</td>
                                <td>{{ $item->university }}</td>
                                <td>{{ $item->email }}</td>
                                <td>{{ $item->status ?? 'pending' }}</td>
                                <td>
                                    <form class="inline-form" method="POST" action="{{ route('admin.internships.status', $item) }}">
                                        @csrf
                                        <select name="status">
                                            @foreach(['pending', 'reviewed', 'shortlisted', 'accepted', 'rejected'] as $status)
                                                <option value="{{ $status }}" @selected(($item->status ?? 'pending') === $status)>{{ $status }}</option>
                                            @endforeach
                                        </select>
                                        <button type="submit">Save</button>
                                    </form>
                                    @if($item->cv_path)
                                        <div><a href="{{ $item->cv_path }}" target="_blank" rel="noopener noreferrer">CV</a></div>
                                    @endif
                                </td>
                            </tr>
                        @empty
                            <tr><td colspan="5">No internship applications yet.</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <div class="panel">
                <h3>Latest Publications</h3>
                <table>
                    <thead><tr><th>Title</th><th>Author</th><th>Contact To Buy</th></tr></thead>
                    <tbody>
                        @forelse($latestPublications as $item)
                            <tr>
                                <td>{{ $item->title }}</td>
                                <td>{{ $item->author ?? '-' }}</td>
                                <td>{{ $item->contact_to_buy ?? '-' }}</td>
                            </tr>
                        @empty
                            <tr><td colspan="3">No publications yet.</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <div class="panel">
                <h3>Latest Training Programs</h3>
                <table>
                    <thead><tr><th>Program</th><th>Dates</th><th>Location</th><th>Status</th></tr></thead>
                    <tbody>
                        @forelse($latestPrograms as $item)
                            <tr>
                                <td>{{ $item->title }}</td>
                                <td>{{ optional($item->start_date)->format('Y-m-d') ?? '-' }} to {{ optional($item->end_date)->format('Y-m-d') ?? '-' }}</td>
                                <td>{{ $item->location ?? '-' }}</td>
                                <td>{{ $item->is_active ? 'Active' : 'Inactive' }}</td>
                            </tr>
                        @empty
                            <tr><td colspan="4">No training programs yet.</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <div class="panel">
                <h3>News & Advertisements</h3>
                <table>
                    <thead><tr><th>Title</th><th>Type</th><th>Published</th><th>State</th></tr></thead>
                    <tbody>
                        @forelse($latestNews as $item)
                            <tr>
                                <td>{{ $item->title }}</td>
                                <td>{{ ucfirst($item->type) }}</td>
                                <td>{{ optional($item->published_at)->format('Y-m-d') ?? '-' }}</td>
                                <td>
                                    @if($item->is_published)
                                        <span class="tag published">Published</span>
                                    @else
                                        <span class="tag draft">Draft</span>
                                    @endif
                                </td>
                            </tr>
                        @empty
                            <tr><td colspan="4">No posts yet.</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <div class="panel">
                <h3>Office Addresses</h3>
                <table>
                    <thead><tr><th>Office</th><th>Address</th><th>Email</th><th>Phone</th></tr></thead>
                    <tbody>
                        @forelse($officeAddresses as $item)
                            <tr>
                                <td>{{ $item->city ?? 'WBS Office' }}</td>
                                <td>{{ trim(collect([$item->street, $item->area, $item->building])->filter()->implode(', ')) ?: '-' }}</td>
                                <td>{{ $item->email ?? '-' }}</td>
                                <td>{{ $item->phone ?? '-' }}</td>
                            </tr>
                        @empty
                            <tr><td colspan="4">No office addresses yet.</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <div class="api">
            Resources wired to website forms and pages: <strong>contact-inquiries</strong>, <strong>internship-applications</strong>, <strong>news-posts</strong>, <strong>publications</strong>, <strong>training-programs</strong>, <strong>office-addresses</strong>.
        </div>
    </div>
</body>
</html>
