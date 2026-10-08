import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const tickets = [
  { id: 'refund', ask: 'Can I get a refund for a duplicate charge?', snippet: 'Refunds for duplicate charges are issued within 5 business days after the charge ID is confirmed.', title: 'KB-104' },
  { id: 'export', ask: 'How do I export last month?', snippet: 'Exports live under Settings, History, then Download CSV for a closed month.', title: 'KB-220' },
];

export default function AIDemo() {
  const [id, setId] = useState(tickets[0].id);
  const [done, setDone] = useState(false);
  const ticket = tickets.find((t) => t.id === id);
  return (
    <section id="demo" className="scroll-mt-24 bg-surface-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="AI Demo" title="Draft a Reply from a Knowledge Snippet" subtitle="The answer stays inside the article you select." />
        <div className="mt-8 rounded-3xl border border-primary/15 bg-surface-100 p-6">
          <div className="flex flex-wrap gap-2">{tickets.map((t) => <button key={t.id} type="button" onClick={() => { setId(t.id); setDone(false); }} className={`rounded-md px-3 py-2 text-sm ${id === t.id ? 'bg-primary text-white' : 'border border-primary/20'}`}>{t.title}</button>)}</div>
          <p className="mt-4 text-sm text-ink">Ticket: {ticket.ask}</p>
          <p className="mt-2 text-sm text-ink-soft">Snippet: {ticket.snippet}</p>
          <button type="button" onClick={() => setDone(true)} className="mt-4 w-full rounded-lg bg-primary py-3 font-semibold text-white">Draft reply</button>
          {done && (
            <div className="mt-4 rounded-xl border border-primary/15 bg-surface-50 p-4 text-sm text-ink">
              Thanks for writing in. {ticket.snippet} Source: {ticket.title}.
            </div>
          )}
          <p className="mt-3 text-center text-xs text-ink-muted">Simulated grounded reply. Switch the article to change the draft.</p>
        </div>
      </div>
    </section>
  );
}
