"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@civic/auth/react";


export function NavBar() {
    const navItems = [
        {
            name: "Features",
            link: "#features",
        },
        {
            name: "Pricing",
            link: "#pricing",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const router = useRouter();

    const { signIn, user, signOut } = useUser();

    const doSignIn = useCallback(() => {
        console.log("[Page] Starting sign-in process");
        signIn()
            .then(() => {
                if (user) {
<<<<<<< HEAD
                    console.log(user.name, user.email, user.email);
=======
>>>>>>> b46af0b83cbdd34bc4ab3006ccda60fda7de0590
                    router.push("/dashboard");
                    console.log("[Page] Sign in completed successfully");
                }
            })
            .catch((error) => {
                console.error("[Page] Sign in failed:", error);
            });
    }, [signIn]);

    const doSignOut = useCallback(() => {
        console.log("[Page] Starting sign-out process");
        signOut()
            .then(() => {
                router.push("/");
                console.log("[Page] Sign out completed successfully");
            })
            .catch((error) => {
                console.error("[Page] Sign out failed:", error);
            });
    }, [signOut]);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} className="font-[semiBold]" />
                    <div className="flex items-center gap-4">
<<<<<<< HEAD
                        <NavbarButton variant="primary">Get Started Today</NavbarButton>
=======
                        <NavbarButton variant="secondary" onClick={doSignIn}>Login</NavbarButton>
                        <NavbarButton variant="secondary" onClick={doSignOut}>Logout</NavbarButton>
                        <NavbarButton variant="primary">Book a call</NavbarButton>
>>>>>>> b46af0b83cbdd34bc4ab3006ccda60fda7de0590
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Book a call
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            {/* Navbar */}
        </div>
    );
}