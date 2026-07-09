'use client';
import { Button } from '../ui/button';

const LoginSignupBtn = () => {
    return (
        <div className="flex items-center gap-3">
            <Button variant="outline" className='cursor-pointer'>Login</Button>
            <Button className='cursor-pointer bg-blue-600 hover:bg-blue-500'>Sign Up</Button>
        </div>
    );
};

export default LoginSignupBtn;