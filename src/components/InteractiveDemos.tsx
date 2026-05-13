import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { loyaltyDemoSteps, creatorDemoSteps, adminRows, type AdminRow } from '../data/demos';
import AppFlowPreview from './AppFlowPreview';
import PhoneMockup from './PhoneMockup';
import StatusBadge from './ui/StatusBadge';

const loyaltyScreens: Record<string, () => JSX.Element> = {
  login: () => (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Loyalty App</p>
        <div className="mt-6 space-y-4">
          <div className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-4 text-slate-300">+63 912 345 6789</div>
          <button className="w-full rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950">Send OTP</button>
        </div>
      </div>
    </div>
  ),
  otp: () => (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 text-slate-300">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">OTP Verification</p>
        <div className="mt-6 flex justify-between gap-3 text-center text-xl font-semibold tracking-[0.2em] text-white">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} className="inline-flex h-14 w-12 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900">
              8
            </span>
          ))}
        </div>
        <button className="mt-8 w-full rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950">Verify OTP</button>
      </div>
    </div>
  ),
  dashboard: () => (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 text-slate-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-cyan-300/80">Welcome back</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Ross</h3>
          </div>
          <div className="rounded-3xl bg-slate-800/90 px-3 py-2 text-sm text-slate-200">148 pts</div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {['Vouchers', 'Profile', 'Notifications'].map((label) => (
            <div key={label} className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-4 text-center text-sm text-slate-200">{label}</div>
          ))}
        </div>
        <button className="mt-6 w-full rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950">View Vouchers</button>
      </div>
    </div>
  ),
  vouchers: () => (
    <div className="space-y-4">
      {[
        { name: 'Welcome Voucher', amount: '₱150', expiry: '30 Apr' },
        { name: 'Birthday Reward', amount: '₱250', expiry: '05 May' },
        { name: 'Discount Coupon', amount: '10% off', expiry: '12 May' },
      ].map((voucher) => (
        <div key={voucher.name} className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/80">{voucher.name}</p>
              <p className="mt-2 text-lg font-semibold text-white">{voucher.amount}</p>
            </div>
            <span className="rounded-full bg-slate-800/80 px-3 py-2 text-xs text-slate-200">Expires {voucher.expiry}</span>
          </div>
          <button className="mt-6 w-full rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-700">View Details</button>
        </div>
      ))}
    </div>
  ),
  'voucher-details': () => (
    <div className="space-y-5">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 text-slate-300">
        <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/80">Voucher details</p>
        <h3 className="mt-3 text-xl font-semibold text-white">Birthday Reward</h3>
        <p className="mt-3 text-sm text-slate-300">Redeem this reward for a special mobile offer at any branch.</p>
        <div className="mt-5 grid gap-3 rounded-3xl bg-slate-900/80 p-4">
          <span className="text-sm text-slate-300">Expiry date: 05 May</span>
          <span className="text-sm text-slate-300">Conditions: One claim per account</span>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-5 text-slate-200">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-center tracking-[0.28em] text-slate-100">|| || | |</div>
        <button className="mt-6 w-full rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950">Claim Voucher</button>
      </div>
    </div>
  ),
  'claim-success': () => (
    <div className="space-y-5 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 text-slate-300">
      <div className="rounded-3xl bg-emerald-500/10 p-5 text-center text-slate-100">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Success</p>
        <h3 className="mt-3 text-xl font-semibold">Voucher claimed</h3>
        <p className="mt-2 text-sm text-slate-200">Your voucher is ready for use at checkout.</p>
      </div>
      <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
        <p className="text-sm text-slate-300">Claimed: Birthday Reward</p>
        <p className="text-sm text-slate-300">Expires: 05 May</p>
      </div>
      <button className="w-full rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950">Back to Dashboard</button>
    </div>
  ),
};

const creatorScreens: Record<string, () => JSX.Element> = {
  upload: () => (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 text-slate-300">
        <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/80 p-8 text-center text-slate-500">Upload placeholder</div>
        <div className="mt-6 grid gap-3">
          <button className="rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100">Choose Video</button>
          <button className="rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950">Continue</button>
        </div>
      </div>
    </div>
  ),
  details: () => (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 text-slate-300">
        <div className="space-y-4">
          <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-200">Title: Mobile developer update</div>
          <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-200">Tags: Tech, Mobile, Tutorial</div>
        </div>
        <button className="mt-6 w-full rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950">Continue</button>
      </div>
    </div>
  ),
  thumbnail: () => (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 text-slate-300">
        <div className="rounded-3xl bg-slate-900/80 p-8 text-center text-slate-400">Thumbnail preview</div>
        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100">Generate Thumbnail</button>
          <button className="flex-1 rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950">Continue</button>
        </div>
      </div>
    </div>
  ),
  processing: () => (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 text-slate-300">
        {['Uploading', 'Processing', 'Encoding', 'Ready'].map((step, index) => (
          <div key={step} className="flex items-center gap-3 rounded-3xl bg-slate-900/80 p-4">
            <div className="h-3 w-3 rounded-full bg-cyan-400" />
            <div className="flex-1">
              <p className="text-sm text-slate-200">{step}</p>
              <div className="mt-2 h-2 rounded-full bg-slate-800">
                <div className={`h-full rounded-full ${index < 3 ? 'w-3/4 bg-cyan-400' : 'w-1/4 bg-slate-600'}`} />
              </div>
            </div>
          </div>
        ))}
        <button className="mt-6 w-full rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950">Publish Video</button>
      </div>
    </div>
  ),
  published: () => (
    <div className="space-y-6 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 text-slate-300">
      <div className="rounded-3xl bg-emerald-500/10 p-5 text-center text-slate-100">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Published</p>
        <h3 className="mt-3 text-xl font-semibold">Mobile developer update</h3>
      </div>
      <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-200">Status: Published</div>
      <button className="w-full rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100">View Video</button>
    </div>
  ),
  'video-details': () => (
    <div className="space-y-6 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 text-slate-300">
      <div className="rounded-3xl bg-slate-900/80 p-6 text-center text-slate-400">Video player area</div>
      <div className="grid gap-3 sm:grid-cols-3">
        {['1.2K likes', '24 comments', '18K views'].map((metric) => (
          <div key={metric} className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-200">{metric}</div>
        ))}
      </div>
      <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-200">
        Creator: Ross • Published 2h ago
      </div>
      <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-200">
        Comments preview: Great breakdown, useful workflow details, nice presenter.
      </div>
    </div>
  ),
};

export default function InteractiveDemos() {
  const [loyaltyStep, setLoyaltyStep] = useState(1);
  const [creatorStep, setCreatorStep] = useState(1);
  const [adminStatus, setAdminStatus] = useState<AdminRow[]>(adminRows);

  const adminCounts = useMemo(
    () => ({
      Published: adminStatus.filter((row) => row.status === 'Published').length,
      Ready: adminStatus.filter((row) => row.status === 'Ready').length,
      Unpublished: adminStatus.filter((row) => row.status === 'Unpublished').length,
      Deleted: adminStatus.filter((row) => row.status === 'Deleted').length,
    }),
    [adminStatus],
  );

  const changeAdminStatus = (id: string, status: AdminRow['status']) => {
    setAdminStatus((current) => current.map((row) => (row.id === id ? { ...row, status } : row)));
  };

  return (
    <div className="space-y-16">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Interactive App Demos</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Interactive mock app flows for mobile product stories.</h2>
        </motion.div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <PhoneMockup title="Loyalty App Flow" status="Live demo">
            {loyaltyScreens[loyaltyDemoSteps[loyaltyStep - 1].id]()}
          </PhoneMockup>
        </div>
        <AppFlowPreview
          steps={loyaltyDemoSteps}
          currentStep={loyaltyStep}
          onBack={() => setLoyaltyStep((value) => Math.max(1, value - 1))}
          onNext={() => setLoyaltyStep((value) => Math.min(loyaltyDemoSteps.length, value + 1))}
          onReset={() => setLoyaltyStep(1)}
          renderContent={(stepId) => loyaltyScreens[stepId]()}
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <PhoneMockup title="Creator Video Flow" status="Preview">
            {creatorScreens[creatorDemoSteps[creatorStep - 1].id]()}
          </PhoneMockup>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-800/90 bg-slate-900/90 p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Demo overview</p>
          <p className="text-slate-300">
            This demo shows a simplified creator video workflow from upload, metadata, thumbnail generation, processing, publishing, and engagement preview.
          </p>
          <div className="grid gap-3 rounded-3xl border border-slate-800/90 bg-slate-950/80 p-4">
            <button
              onClick={() => setCreatorStep((value) => Math.max(1, value - 1))}
              className="rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-700"
            >
              Back
            </button>
            <button
              onClick={() => setCreatorStep((value) => Math.min(creatorDemoSteps.length, value + 1))}
              className="rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Next
            </button>
            <button
              onClick={() => setCreatorStep(1)}
              className="rounded-3xl border border-slate-700/90 bg-slate-950 px-4 py-3 text-sm text-slate-200 hover:border-slate-600"
            >
              Reset
            </button>
          </div>
          <p className="text-sm text-slate-400">Progress: {creatorStep} of {creatorDemoSteps.length} screens</p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-6 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Admin / Web Studio Flow</p>
            <p className="text-slate-300">
              This demo shows how admin tools can support moderation, search, filtering, and content status management.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {Object.entries(adminCounts).map(([key, value]) => (
                <div key={key} className="rounded-3xl bg-slate-950/90 p-4 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{key}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center justify-between gap-3">
                <input type="text" placeholder="Search videos" className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200 outline-none" />
                <button className="rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950">Search</button>
              </div>
            </div>
            <div className="space-y-3">
              {adminStatus.map((row) => (
                <div key={row.id} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 text-slate-200">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{row.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{row.creator} • {row.date}</p>
                    </div>
                    <StatusBadge status={row.status} />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(['Published', 'Unpublished', 'Ready', 'Deleted'] as const).map((status) => (
                      <button
                        key={status}
                        onClick={() => changeAdminStatus(row.id, status)}
                        className="rounded-full border border-slate-700 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-300 hover:bg-slate-800"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
