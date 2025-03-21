import LoginPage from "@/components/Login";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { Redirect, Route } from "wouter";

export function AppRouter() {
  return (
    <>
      <Route
        path="/login"
        component={() => (
          <SignedOut>
            <LoginPage />
          </SignedOut>
        )}
      />

      <SignedIn>
        <div className="flex h-screen flex-col justify-center">
          <SignOutButton />
        </div>
      </SignedIn>
      <Redirect to="/login" />
    </>
  );
}
