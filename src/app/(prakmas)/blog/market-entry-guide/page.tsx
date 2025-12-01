import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe, Building, Shield, Users, TrendingUp, FileCheck } from 'lucide-react';
import Link from 'next/link';

export default function MarketEntryGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-6 py-32">
        <Link 
          href="/resources" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Resources
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Global Consulting
            </span>
            <span className="text-muted-foreground">•</span>
            <time className="text-muted-foreground">December 1, 2025</time>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">10 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            India Market Entry Guide: Build Your Tech Presence
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Complete roadmap for international companies establishing operations in India. Legal requirements, team building, cultural insights, and cost structures from 50+ successful market entries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
            <Globe className="h-8 w-8 text-orange-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Companies Guided</div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <Building className="h-8 w-8 text-blue-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">6-12 weeks</div>
            <div className="text-sm text-muted-foreground">Typical Setup Time</div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">60-70%</div>
            <div className="text-sm text-muted-foreground">Cost Savings vs US</div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Why India for Tech Operations?</h2>
          <p>
            India is the #1 destination for tech offshoring and market expansion. Here's why over 1,500 Fortune 2000 companies have presence in India:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Talent Depth</h4>
              <p className="text-sm text-muted-foreground">5M+ tech professionals, 1.5M engineering graduates annually. Largest English-speaking tech talent pool globally.</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Cost Advantage</h4>
              <p className="text-sm text-muted-foreground">60-70% lower costs than US/Europe while maintaining quality. Senior developer: $35K-50K vs $150K-180K in US.</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Time Zone Benefits</h4>
              <p className="text-sm text-muted-foreground">4-5 hour overlap with US East Coast, 3-4 hours with Europe. Enables 24/7 operations and faster development cycles.</p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Business-Friendly Reforms</h4>
              <p className="text-sm text-muted-foreground">Improved ease of doing business (rank #63 globally in 2025). Digital infrastructure, startup ecosystem support.</p>
            </div>
          </div>

          <h2>Market Entry Options: Choose Your Structure</h2>
          <p>
            Four main approaches to establish presence in India. Each has different setup complexity, costs, and control levels:
          </p>

          <div className="not-prose space-y-6 my-8">
            <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">1. Managed Services Partner (Easiest)</h3>
                <div className="text-sm bg-blue-500/10 text-blue-600 px-3 py-1 rounded">Recommended Start</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Partner with established provider (like PraKMas) who provides team, infrastructure, and compliance. You direct the work, we handle operations.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="block mb-2">Pros:</strong>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Fastest setup (2-4 weeks)</li>
                    <li>• No legal entity needed</li>
                    <li>• Scalable team (5-50+ developers)</li>
                    <li>• Lowest initial cost ($15K-40K/month)</li>
                  </ul>
                </div>
                <div>
                  <strong className="block mb-2">Cons:</strong>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Less direct control over hiring</li>
                    <li>• Higher per-developer cost than own entity</li>
                    <li>• Team technically employed by partner</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-background/50 rounded text-sm">
                <strong>Best for:</strong> Testing India operations, teams {"<"}20 people, companies wanting quick start without legal overhead.
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">2. Wholly Owned Subsidiary (Most Control)</h3>
                <div className="text-sm bg-green-500/10 text-green-600 px-3 py-1 rounded">Long-Term Play</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Register Indian Private Limited company (100% foreign ownership allowed). Full control over operations, hiring, IP.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="block mb-2">Pros:</strong>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Complete operational control</li>
                    <li>• Direct employee relationships</li>
                    <li>• Long-term cost efficiency at scale</li>
                    <li>• Can serve Indian market directly</li>
                  </ul>
                </div>
                <div>
                  <strong className="block mb-2">Cons:</strong>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 8-12 week setup timeline</li>
                    <li>• $25K-50K initial setup costs</li>
                    <li>• Ongoing compliance burden</li>
                    <li>• Need local director/registered office</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-background/50 rounded text-sm">
                <strong>Best for:</strong> Teams 20+ people, long-term commitment (3+ years), companies needing full control or serving Indian customers.
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">3. Branch Office (Limited Scope)</h3>
                <div className="text-sm bg-purple-500/10 text-purple-600 px-3 py-1 rounded">Niche Use Case</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Extension of parent company. Can only support parent's operations, not serve Indian market independently. Requires RBI approval.
              </p>
              <div className="mt-4 p-3 bg-background/50 rounded text-sm">
                <strong>Best for:</strong> R&D centers, support offices for existing global operations. Not recommended for most tech companies.
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">4. Contractor/Freelancer Model (Smallest Scale)</h3>
                <div className="text-sm bg-orange-500/10 text-orange-600 px-3 py-1 rounded">Pilot Projects</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Hire individual contractors or small agencies for specific projects. No entity needed, pay-as-you-go.
              </p>
              <div className="mt-4 p-3 bg-background/50 rounded text-sm">
                <strong>Best for:</strong> Testing waters with 1-3 developers, short-term projects ({"<"}6 months). Scales poorly, higher management overhead.
              </div>
            </div>
          </div>

          <h2>The 90-Day Launch Plan (Managed Services Route)</h2>
          <p>
            Here's how PraKMas helps companies go from "We're exploring India" to "We have a functioning 10-person team" in 3 months:
          </p>

          <div className="not-prose space-y-4 my-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center font-bold text-blue-600">Week 1-2</span>
                Discovery & Strategy
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground ml-12">
                <li><strong>• Requirements gathering:</strong> Team size, skills, timeline, budget</li>
                <li><strong>• Legal consultation:</strong> Tax implications, IP protection, contract structure</li>
                <li><strong>• Candidate sourcing:</strong> Pre-screen 15-20 developers matching your tech stack</li>
                <li><strong>• Deliverable:</strong> Detailed proposal with team structure, costs, timeline</li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center font-bold text-green-600">Week 3-4</span>
                Team Selection
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground ml-12">
                <li><strong>• Interviews:</strong> You interview 2-3 candidates per role, we handle scheduling</li>
                <li><strong>• Technical assessments:</strong> Coding tests, portfolio reviews, reference checks</li>
                <li><strong>• Contract finalization:</strong> Master Services Agreement, NDAs, IP assignment</li>
                <li><strong>• Deliverable:</strong> Confirmed team roster, start date locked</li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center font-bold text-purple-600">Week 5-8</span>
                Onboarding & Setup
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground ml-12">
                <li><strong>• Infrastructure:</strong> Dev environments, access credentials, communication tools</li>
                <li><strong>• Knowledge transfer:</strong> Codebase walkthrough, architecture docs, processes</li>
                <li><strong>• Initial sprints:</strong> Start with small tasks to build familiarity</li>
                <li><strong>• Deliverable:</strong> Team productive at 50-70% capacity</li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center font-bold text-orange-600">Week 9-12</span>
                Full Production
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground ml-12">
                <li><strong>• Velocity ramp-up:</strong> Team reaches 90-100% productivity</li>
                <li><strong>• Process optimization:</strong> Adjust communication cadence, workflows</li>
                <li><strong>• Performance reviews:</strong> Identify any issues, make adjustments</li>
                <li><strong>• Deliverable:</strong> Fully functioning team ready for complex work</li>
              </ul>
            </div>
          </div>

          <h2>Cost Structure Breakdown</h2>
          <p>
            Transparency is key. Here's the actual cost comparison for a 10-person development team in India:
          </p>

          <div className="not-prose bg-muted/30 rounded-xl p-6 my-8">
            <h3 className="font-bold mb-4">Option 1: Managed Services (PraKMas Model)</h3>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between border-b border-border pb-2">
                <span>5 Mid-level developers ($5,500/month each)</span>
                <span className="font-semibold">$27,500/mo</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>3 Senior developers ($7,500/month each)</span>
                <span className="font-semibold">$22,500/mo</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>2 QA engineers ($4,000/month each)</span>
                <span className="font-semibold">$8,000/mo</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>Project Manager (included)</span>
                <span className="font-semibold">Included</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>Infrastructure, tools, admin</span>
                <span className="font-semibold">Included</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="font-bold text-lg">Total Monthly Cost</span>
                <span className="font-bold text-lg text-green-600">$58,000</span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              <strong>Setup:</strong> $5,000 one-time | <strong>Minimum commitment:</strong> 6 months | <strong>Scale up/down:</strong> 30-day notice
            </div>
          </div>

          <div className="not-prose bg-muted/30 rounded-xl p-6 my-8">
            <h3 className="font-bold mb-4">Option 2: Own Subsidiary (DIY Approach)</h3>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between border-b border-border pb-2">
                <span>Payroll (salaries + benefits)</span>
                <span className="font-semibold">$42,000/mo</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>Office space (10 seats, Tier-1 city)</span>
                <span className="font-semibold">$3,500/mo</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>HR/Admin staff (2 people)</span>
                <span className="font-semibold">$2,500/mo</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>Legal, accounting, compliance</span>
                <span className="font-semibold">$2,000/mo</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>Recruitment, training, attrition buffer</span>
                <span className="font-semibold">$4,000/mo</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="font-bold text-lg">Total Monthly Cost</span>
                <span className="font-bold text-lg text-orange-600">$54,000</span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground mb-3">
              <strong>Setup:</strong> $35,000-50,000 one-time (legal, office deposit, initial hiring) | <strong>Timeline:</strong> 10-12 weeks | <strong>Minimum scale:</strong> 15-20 people for efficiency
            </div>
            <div className="text-xs bg-yellow-500/10 border border-yellow-500/20 p-3 rounded">
              <strong>Note:</strong> Own subsidiary becomes more cost-effective at 25+ headcount. Below that, managed services typically offer better value when factoring in overhead.
            </div>
          </div>

          <h2>Legal & Compliance Essentials</h2>
          <p>
            Indian business regulations are complex but navigable. Key areas to address:
          </p>

          <div className="not-prose space-y-4 my-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-blue-600" />
                1. Intellectual Property Protection
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                India respects IP, but agreements must be ironclad. Essential documents:
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Work-for-Hire clauses in all contracts (IP vests in you, not developer)</li>
                <li>• Non-Compete Agreements (enforceable for 1-2 years post-termination)</li>
                <li>• NDAs with penalty clauses (₹5-10L typical)</li>
                <li>• Code ownership documentation (important for VC due diligence)</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                2. Tax Compliance
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Two key taxes for foreign companies:
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <strong>Goods & Services Tax (GST):</strong> 18% on services. Managed services include this in pricing.</li>
                <li>• <strong>Transfer Pricing:</strong> If own subsidiary, document arm's-length transactions to avoid double taxation.</li>
                <li>• <strong>Tax Treaty Benefits:</strong> US/UK/EU have DTAAs (Double Tax Avoidance Agreements) - withholding tax reduced to 10-15%.</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                3. Employment Law
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                India is employee-friendly. Key requirements:
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <strong>Notice periods:</strong> 30-90 days standard (cannot be waived without buyout)</li>
                <li>• <strong>Severance:</strong> 15 days salary per year of service (if company initiated)</li>
                <li>• <strong>Provident Fund:</strong> 12% employee + 12% employer contribution (like 401k)</li>
                <li>• <strong>Leave:</strong> 12-15 days casual + 10-12 days sick leave annually</li>
              </ul>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Building className="h-5 w-5 text-orange-600" />
                4. Data Privacy (DPDP Act 2024)
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                India's GDPR equivalent came into effect in 2025:
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• User consent required for data collection and processing</li>
                <li>• Data localization for sensitive personal data (health, financial)</li>
                <li>• Penalties up to ₹250 crore ($30M) for violations</li>
                <li>• <strong>Action:</strong> Include Data Processing Addendum in contracts</li>
              </ul>
            </div>
          </div>

          <h2>Cultural Success Factors</h2>
          <p>
            Beyond legal and financial considerations, cultural alignment makes or breaks offshore success. Based on 50+ market entries:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">✅ What Works</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><strong>Clear documentation:</strong> Indian teams excel with well-defined requirements.</li>
                <li><strong>Regular video calls:</strong> Daily standups + async Slack. Timezone overlap crucial.</li>
                <li><strong>Respect hierarchy:</strong> Acknowledge experience levels, involve seniors in decisions.</li>
                <li><strong>Invest in relationships:</strong> Occasional visits build trust (2x/year ideal).</li>
                <li><strong>Provide growth paths:</strong> Indians value learning - offer training budgets, certifications.</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">❌ What Fails</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><strong>Ambiguous requirements:</strong> "Figure it out" approach leads to misalignment.</li>
                <li><strong>Email-only communication:</strong> Slows feedback loops, causes isolation.</li>
                <li><strong>Treating as "cheap labor":</strong> Best Indian talent knows their worth, will leave.</li>
                <li><strong>Micromanagement:</strong> Undermines trust, stifles autonomy.</li>
                <li><strong>Ignoring holidays:</strong> Diwali (Oct/Nov) is like Christmas - expect 1-week slowdown.</li>
              </ul>
            </div>
          </div>

          <h2>Risk Mitigation Strategies</h2>
          <p>
            Every market entry has risks. Here's how successful companies manage them:
          </p>

          <div className="not-prose space-y-3 my-6">
            <div className="border-l-4 border-blue-500 bg-blue-500/5 p-4 rounded-r-lg">
              <h4 className="font-semibold mb-2">Risk: Knowledge Loss (Team Turnover)</h4>
              <p className="text-sm text-muted-foreground mb-2"><strong>Mitigation:</strong></p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Document everything in wikis/Notion (mandate for all team members)</li>
                <li>• Pair programming and cross-training (no single points of failure)</li>
                <li>• Retention bonuses at 1-2 year marks</li>
                <li>• PraKMas model: we handle backfill within 2 weeks if anyone leaves</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 bg-green-500/5 p-4 rounded-r-lg">
              <h4 className="font-semibold mb-2">Risk: Communication Gaps</h4>
              <p className="text-sm text-muted-foreground mb-2"><strong>Mitigation:</strong></p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Overlap hours mandate (US team adjusts 2-3 hours early, India stays late)</li>
                <li>• Written summaries after every meeting (prevents misunderstandings)</li>
                <li>• Screen recordings for complex explanations (Loom)</li>
                <li>• Quarterly in-person meetings or annual team off-site</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-500/5 p-4 rounded-r-lg">
              <h4 className="font-semibold mb-2">Risk: Quality Control</h4>
              <p className="text-sm text-muted-foreground mb-2"><strong>Mitigation:</strong></p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Mandatory code reviews (senior US dev reviews India team's PRs initially)</li>
                <li>• Automated testing requirements (CI/CD catches issues early)</li>
                <li>• Define "Definition of Done" explicitly (checklists for every task)</li>
                <li>• PraKMas model: we do internal QA before work reaches you</li>
              </ul>
            </div>
          </div>

          <h2>How PraKMas Simplifies India Entry</h2>
          <p>
            We've helped 50+ companies establish India operations. Here's our full-service offering:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Market Entry Consulting</h4>
              <p className="text-sm text-muted-foreground mb-3">
                2-week assessment: market analysis, entity structure recommendation, cost modeling, risk assessment. Deliverable: 30-page playbook.
              </p>
              <div className="text-sm"><strong>Investment:</strong> $8,000 (refundable if you proceed with managed services)</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Managed Development Teams</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Turnkey solution: we recruit, employ, manage the team. You get dedicated developers working exclusively for you.
              </p>
              <div className="text-sm"><strong>Investment:</strong> $5-8K per developer/month | 6-month minimum</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Subsidiary Setup Service</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Full incorporation: company registration, compliance setup, office lease, initial hiring. You own entity, we handle paperwork.
              </p>
              <div className="text-sm"><strong>Investment:</strong> $35,000 one-time + $3K/month ongoing compliance</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Employer of Record (EOR)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                You hire individuals directly, we employ them legally (payroll, benefits, compliance). Flexible scaling without entity.
              </p>
              <div className="text-sm"><strong>Investment:</strong> 15-20% markup on salary costs</div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 border border-orange-500/20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Expand to India?</h2>
            <p className="text-muted-foreground mb-6">
              Schedule a free market entry consultation. We'll assess your needs, explain options, and provide a clear roadmap with cost estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  <Globe className="h-5 w-5" />
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/global-consulting">
                <Button size="lg" variant="outline" className="gap-2">
                  <Building className="h-5 w-5" />
                  View Consulting Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}