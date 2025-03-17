import { SignIn } from "@clerk/clerk-react";

export default function LoginPage() {
  return (
    <>
      <div className="relative min-h-svh">
        <div
          className="absolute inset-0"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background/90" />
        <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
          <div className="flex w-full max-w-sm flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 self-center font-medium">
                <div className="flex h-6 w-6 items-center justify-center rounded-md text-primary-foreground"></div>
                Portal
              </div>
              <SignIn withSignUp={true} />
              {/* <SignInButton withSignUp={true} fallbackRedirectUrl={"/"}>
                <Button variant={"outline"} className="w-full">
                  Sign in with Discord
                </Button>
              </SignInButton> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
