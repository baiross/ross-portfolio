export type DemoStep = {
  id: string;
  title: string;
  summary: string;
};

export const loyaltyDemoSteps: DemoStep[] = [
  { id: 'login', title: 'Login', summary: 'Enter mobile number and request OTP to start the loyalty experience.' },
  { id: 'otp', title: 'OTP Verification', summary: 'Verify the account using a 6-digit one-time passcode.' },
  { id: 'dashboard', title: 'Dashboard', summary: 'View loyalty points, notifications, and quick access to vouchers.' },
  { id: 'vouchers', title: 'Vouchers List', summary: 'Browse available vouchers and choose one to review.' },
  { id: 'voucher-details', title: 'Voucher Details', summary: 'Review expiry, conditions, and barcode before claiming.' },
  { id: 'claim-success', title: 'Claim Success', summary: 'Confirm the voucher claim and return to the dashboard.' },
];

export const creatorDemoSteps: DemoStep[] = [
  { id: 'upload', title: 'Upload Video', summary: 'Start your upload journey with a placeholder video selection screen.' },
  { id: 'details', title: 'Add Details', summary: 'Add a title, tags, and metadata for the creator video.' },
  { id: 'thumbnail', title: 'Generate Thumbnail', summary: 'Preview the generated thumbnail and move to publishing.' },
  { id: 'processing', title: 'Processing Status', summary: 'Display upload and encoding progress before publishing content.' },
  { id: 'published', title: 'Published Video', summary: 'Celebrate a successful publish and review the content state.' },
  { id: 'video-details', title: 'Video Details', summary: 'See engagement stats, creator metadata, and comments preview.' },
];

export type AdminRow = {
  id: string;
  title: string;
  creator: string;
  status: 'Published' | 'Unpublished' | 'Ready' | 'Deleted';
  date: string;
};

export const adminRows: AdminRow[] = [
  { id: 'vid-001', title: 'Mobile UX walkthrough', creator: 'Maya', status: 'Published', date: 'May 1' },
  { id: 'vid-002', title: 'Launch campaign preview', creator: 'Rico', status: 'Ready', date: 'May 3' },
  { id: 'vid-003', title: 'Promo product edit', creator: 'Leah', status: 'Unpublished', date: 'Apr 29' },
  { id: 'vid-004', title: 'Feature update clip', creator: 'Nico', status: 'Deleted', date: 'Apr 25' },
];
