import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export function Header() {
  return (
    <header className="header">
      <h1>Pixell River Employee Directory</h1>

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}