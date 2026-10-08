import useDocumentTitle from '../hooks/useDocumentTitle';
import team from '../data/team';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  useDocumentTitle('About', 'Learn about Replyora, a Toronto product company shipping Support product that drafts a reply grounded in a pasted knowledge snippet.');
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading eyebrow="About Replyora" title="A Product, Not a Services Desk" subtitle="Support product that drafts a reply grounded in a pasted knowledge snippet." />
        </AnimateOnScroll>
        <div className="max-w-3xl mx-auto mb-16 glass-card rounded-2xl p-8">
          <h3 className="mb-4 font-display text-xl font-bold text-ink">Our Story</h3>
          <p className="mb-4 text-ink-soft">Replyora started in Toronto with support leads who wanted drafts tied to their own articles.</p>
          <p className="mb-4 text-ink-soft">A ticket plus a snippet should become a reply that cites that snippet.</p>
          <p className="text-ink-soft">The engine is a product. We do not hire agents.</p>
        </div>
        <div className="max-w-3xl mx-auto mb-16 glass-card rounded-2xl p-8">
          <h3 className="mb-4 font-display text-xl font-bold text-ink">Our AI</h3>
          <p className="mb-4 text-ink-soft">Replyora classifies the ticket, retrieves from the pasted snippet, and drafts a grounded reply.</p>
          <p className="mb-4 text-ink-soft">No live fine-tune on each click. Drafting is inference.</p>
          <p className="text-ink-soft">GPUs keep draft latency low. No NVIDIA partnership claimed.</p>
        </div>
        <SectionHeading eyebrow="Our Team" title="The People Behind Replyora" subtitle="Based in Toronto, Canada." />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="glass-card rounded-xl p-6 text-center">
              <img src={member.avatar} alt={member.name} className="mx-auto mb-4 h-20 w-20 rounded-full" />
              <h4 className="font-display text-lg font-semibold text-ink">{member.name}</h4>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-ink-soft">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
