<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WBS Consultation Admin Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f5f8ff; margin: 0; color: #1f2937; }
        .container { max-width: 1100px; margin: 0 auto; padding: 24px; }
        h1 { margin-bottom: 6px; }
        .subtitle { color: #4b5563; margin-bottom: 20px; }
        .cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
        .card { background: #fff; border: 1px solid #dbeafe; border-radius: 10px; padding: 14px; }
        .card h3 { margin: 0; font-size: 14px; color: #2563eb; }
        .card p { margin: 6px 0 0; font-size: 26px; font-weight: 700; }
        .panel { margin-top: 16px; background: #fff; border: 1px solid #dbeafe; border-radius: 10px; padding: 14px; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th, td { padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: left; }
        th { color: #374151; background: #eff6ff; }
        .api { margin-top: 16px; background: #fee2e2; border: 1px solid #fecaca; padding: 12px; border-radius: 8px; color: #991b1b; }
    </style>
</head>
<body>
    <div class="container">
        <h1>WBS Consultation Admin Dashboard</h1>
        <div class="subtitle">Laravel backend management for the full website project.</div>

        <div class="cards">
            <div class="card"><h3>Contact Inquiries</h3><p>{{ $counts['contact_inquiries'] }}</p></div>
            <div class="card"><h3>Internship Applications</h3><p>{{ $counts['internship_applications'] }}</p></div>
            <div class="card"><h3>News Posts</h3><p>{{ $counts['news_posts'] }}</p></div>
            <div class="card"><h3>Publications</h3><p>{{ $counts['publications'] }}</p></div>
            <div class="card"><h3>Training Programs</h3><p>{{ $counts['training_programs'] }}</p></div>
            <div class="card"><h3>Office Addresses</h3><p>{{ $counts['office_addresses'] }}</p></div>
        </div>

        <div class="panel">
            <h3>Latest Contact Inquiries</h3>
            <table>
                <thead><tr><th>Name</th><th>Email</th><th>Subject</th><th>Status</th></tr></thead>
                <tbody>
                    @forelse($latestInquiries as $item)
                        <tr>
                            <td>{{ $item->full_name }}</td>
                            <td>{{ $item->email }}</td>
                            <td>{{ $item->subject }}</td>
                            <td>{{ $item->status }}</td>
                        </tr>
                    @empty
                        <tr><td colspan="4">No inquiries yet.</td></tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <div class="panel">
            <h3>Latest Internship Applications</h3>
            <table>
                <thead><tr><th>Name</th><th>Email</th><th>University</th><th>CV</th><th>Status</th></tr></thead>
                <tbody>
                    @forelse($latestInternships as $item)
                        <tr>
                            <td>{{ $item->full_name }}</td>
                            <td>{{ $item->email }}</td>
                            <td>{{ $item->university }}</td>
                            <td>
                                @if($item->cv_path)
                                    <a href="{{ $item->cv_path }}" target="_blank">Download CV</a>
                                @else
                                    Not uploaded
                                @endif
                            </td>
                            <td>{{ $item->status }}</td>
                        </tr>
                    @empty
                        <tr><td colspan="5">No internship applications yet.</td></tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <div class="api">
            API base: <strong>/api</strong> |
            Health: <strong>/api/health</strong> |
            Resources: office-addresses, contact-inquiries, internship-applications, news-posts, publications, training-programs
        </div>
    </div>
</body>
</html>
