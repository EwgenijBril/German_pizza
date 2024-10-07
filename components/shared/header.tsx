import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';


interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b border-gray-100', className)}>
        <div className="flex items-center gap-4">
          <Image src="/logo.png" width={36} height={36} alt="Logo" />
            <div>
                <h1 className="text-2xl uppercase font-black">Deutsche Pizza</h1>
                <p className="text-sm text-gray-400 leading-3">besser gehts nicht</p>
            </div>
        </div>
    </header>
  );
};