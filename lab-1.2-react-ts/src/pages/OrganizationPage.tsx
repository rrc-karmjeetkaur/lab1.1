import { organizationData } from "../data/organization";

export function OrganizationPage() {
  return (
    <section>
      <h2>Organization Leadership & Management</h2>

      <ul className="org-list">
        {organizationData.map((person, index) => (
          <li key={index} className="org-item">
            <span>
              {person.firstName} {person.lastName}
            </span>
            <span>{person.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}