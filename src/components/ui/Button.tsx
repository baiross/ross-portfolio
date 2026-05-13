import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonProps = ({
  href?: string;
  variant: 'primary' | 'secondary';
} & (AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>));

export default function Button({ href, variant, className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300';
  const variants = {
    primary:
      'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-400',
    secondary:
      'border border-slate-700 bg-slate-900/90 text-slate-100 hover:border-slate-600 hover:bg-slate-800',
  };

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />
    );
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
