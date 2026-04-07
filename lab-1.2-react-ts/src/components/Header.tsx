import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export function Header() {
  return (
    <header className="header">
      <h1>Pixell River Employee Directory</h1>

      {/*  NOT LOGGED IN */}
      <SignedOut>
        <SignInButton />
      </SignedOut>

      {/*  LOGGED IN */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}