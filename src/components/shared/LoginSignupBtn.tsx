'use client';
import Link from 'next/link';
import { Button } from '../ui/button';

const LoginSignupBtn = () => {
    return (
        <div className="flex items-center gap-3">
            <Link href={'/auth/login'}>
                <Button
                    variant="outline"
                    className='cursor-pointer'>
                    Login
                </Button>
            </Link>
            <Link href={'/auth/signup'}>
                <Button
                    className='cursor-pointer bg-blue-600 hover:bg-blue-500'>
                    Sign Up
                </Button>
            </Link>
        </div>
    );
};

export default LoginSignupBtn;