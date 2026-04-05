// components/ContentComponents.tsx
import React from 'react';

// Base wrapper for content sections
export const ContentSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-4">{children}</div>;
};

// Paragraph component
export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-[var(--text-primary)] leading-relaxed">{children}</p>;
};

// List component
export const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className="list-disc pl-6 text-[var(--list-text)] space-y-2">{children}</ul>;
};

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li>{children}</li>;
};

// Code block component
export const CodeBlock = ({ children }: { children: string }) => {
  return (
    <div className="bg-[var(--code-bg)] border border-[var(--code-border)] rounded-xl p-4 overflow-x-auto">
      <pre className="text-[var(--code-text)] text-sm font-mono whitespace-pre-wrap">
        {children}
      </pre>
    </div>
  );
};

// Inline code component
export const InlineCode = ({ children }: { children: React.ReactNode }) => {
  return <code className="text-[var(--code-text)] bg-[var(--code-bg)] px-1 rounded">{children}</code>;
};

// Info box component with variants
interface InfoBoxProps {
  children: React.ReactNode;
  variant?: 'blue' | 'yellow' | 'green' | 'red' | 'purple';
  icon?: string;
}

export const InfoBox = ({ children, variant = 'blue', icon }: InfoBoxProps) => {
  const variantClasses = {
    blue: 'bg-[var(--info-blue-bg)] border-[var(--info-blue-border)] text-[var(--info-blue-text)]',
    yellow: 'bg-[var(--info-yellow-bg)] border-[var(--info-yellow-border)] text-[var(--info-yellow-text)]',
    green: 'bg-[var(--info-green-bg)] border-[var(--info-green-border)] text-[var(--info-green-text)]',
    red: 'bg-[var(--info-red-bg)] border-[var(--info-red-border)] text-[var(--info-red-text)]',
    purple: 'bg-[var(--info-purple-bg)] border-[var(--info-purple-border)] text-[var(--info-purple-text)]',
  };

  return (
    <div className={`p-4 rounded-xl border ${variantClasses[variant]}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </div>
  );
};

// Strong text component
export const Strong = ({ children }: { children: React.ReactNode }) => {
  return <strong className="text-[var(--text-strong)]">{children}</strong>;
};

// Heading component for sections
export const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-xl font-semibold text-[var(--text-strong)] mb-4">{children}</h3>;
};

// Space wrapper for consistent spacing
export const Space = ({ children, size = 'md' }: { children: React.ReactNode; size?: 'sm' | 'md' | 'lg' }) => {
  const spaces = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
  };
  return <div className={spaces[size]}>{children}</div>;
};