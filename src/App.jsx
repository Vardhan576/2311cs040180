const notifications = [
  {
    title: 'TCS Ninja Placement Drive',
    time: 'Today, 10:00 AM',
    category: 'Placement',
    description: 'Register now for the campus placement drive.'
  },
  {
    title: '5th Semester Results',
    time: 'Today, 12:30 PM',
    category: 'Results',
    description: 'View your results on the student portal.'
  },
  {
    title: 'Tech Fest Events',
    time: 'Tomorrow, 9:00 AM',
    category: 'Events',
    description: 'Sign up for workshops and competitions.'
  }
];

function App() {
  return (
    <div className="app-shell">
      <header className="hero-card">
        <p className="eyebrow">Campus Connect</p>
        <h1>Placement, results, and events notifications</h1>
        <p className="hero-text">
          Stay informed with the latest placement, result, and event alerts.
        </p>
      </header>

      <main className="info-grid">
        <section className="info-card">
          <h2>Placement updates</h2>
          <p>Important placement drives, company visits, and eligibility notices.</p>
        </section>
        <section className="info-card">
          <h2>Results</h2>
          <p>Latest exam announcements and result declarations for students.</p>
        </section>
        <section className="info-card">
          <h2>Events</h2>
          <p>Upcoming seminars, competitions, fests, and campus activities.</p>
        </section>
      </main>

      <section className="notifications-card">
        <h2>Latest notifications</h2>
        <div className="notification-list">
          {notifications.map((item) => (
            <article key={item.title} className="notification-item">
              <div className="notification-top">
                <h3>{item.title}</h3>
                <span className="badge">{item.category}</span>
              </div>
              <p className="time">{item.time}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
