export function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <div className="text-logo" aria-label="Pixell River Financial logo">
          PR
        </div>

        <div>
          <h1>Pixell River Employee Directory</h1>
          <p className="greeting">
            Welcome! This directory lists Pixell River staff roles grouped by department.
          </p>
        </div>
      </div>
    </header>
  );
}
