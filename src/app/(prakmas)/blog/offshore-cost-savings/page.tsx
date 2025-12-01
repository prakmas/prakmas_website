import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, DollarSign, TrendingDown, Calculator, CheckCircle, Globe, Users } from 'lucide-react';
import Link from 'next/link';

export default function OffshoreCostSavingsPage() {
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
            <time className="text-muted-foreground">November 30, 2025</time>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">9 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Offshore Cost Savings: The Complete Financial Analysis
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Discover how companies save 50-70% on development costs while maintaining quality. A comprehensive breakdown of offshore development economics with real ROI calculations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <TrendingDown className="h-8 w-8 text-green-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">60-70%</div>
            <div className="text-sm text-muted-foreground">Average Cost Reduction</div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <DollarSign className="h-8 w-8 text-blue-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">$2.5M</div>
            <div className="text-sm text-muted-foreground">Average Annual Savings</div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <Calculator className="h-8 w-8 text-purple-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">8-12 mo</div>
            <div className="text-sm text-muted-foreground">Typical ROI Timeline</div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>The Real Cost of In-House Development</h2>
          <p>
            Before exploring offshore savings, let's establish the baseline. A typical in-house development team in the US costs significantly more than most organizations realize.
          </p>

          <h3>Full Cost Breakdown: US-Based Senior Developer</h3>
          <div className="not-prose bg-muted/30 rounded-xl p-6 my-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Base Salary</span>
                <span className="font-semibold">$140,000/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Benefits (25-35%)</span>
                <span className="font-semibold">$42,000/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Payroll Taxes (7.65%)</span>
                <span className="font-semibold">$10,710/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Office Space & Equipment</span>
                <span className="font-semibold">$15,000/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Recruitment & Training</span>
                <span className="font-semibold">$8,000/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Software Licenses & Tools</span>
                <span className="font-semibold">$5,000/year</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between items-center">
                <span className="font-bold">Total Annual Cost</span>
                <span className="text-xl font-bold text-primary">$220,710/year</span>
              </div>
              <div className="text-sm text-muted-foreground text-right">
                (~$18,392/month)
              </div>
            </div>
          </div>

          <h2>Offshore Development: The Cost Advantage</h2>
          <p>
            Now let's compare this to an equivalent offshore senior developer from India, working through PraKMas's managed services model.
          </p>

          <h3>Offshore Developer Total Cost (India)</h3>
          <div className="not-prose bg-muted/30 rounded-xl p-6 my-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Developer Salary (Competitive)</span>
                <span className="font-semibold">$36,000/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Infrastructure & Tools</span>
                <span className="font-semibold">$3,600/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Management & Overhead</span>
                <span className="font-semibold">$7,200/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Quality Assurance</span>
                <span className="font-semibold">$3,600/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Communication & Coordination</span>
                <span className="font-semibold">$2,400/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Compliance & Legal</span>
                <span className="font-semibold">$1,800/year</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between items-center">
                <span className="font-bold">Total Annual Cost</span>
                <span className="text-xl font-bold text-green-600">$54,600/year</span>
              </div>
              <div className="text-sm text-muted-foreground text-right">
                (~$4,550/month)
              </div>
            </div>
          </div>

          <div className="not-prose bg-green-500/10 border border-green-500/20 rounded-xl p-6 my-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Annual Savings Per Developer</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">$166,110</p>
                <p className="text-muted-foreground">That's a 75.3% cost reduction while maintaining equivalent skill level and output quality.</p>
              </div>
            </div>
          </div>

          <h2>Team-Level ROI Analysis</h2>
          <p>
            The savings multiply dramatically when you consider full team operations. Let's analyze different team sizes:
          </p>

          <h3>Small Team (5 Developers)</h3>
          <div className="not-prose bg-muted/30 rounded-xl p-6 my-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">US Team Annual Cost</span>
                  <span className="font-bold">$1,103,550</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Offshore Team Annual Cost</span>
                  <span className="font-bold text-green-600">$273,000</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="font-bold">Annual Savings</span>
                  <span className="text-xl font-bold text-green-600">$830,550</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                That's enough savings to hire 15 additional offshore developers!
              </div>
            </div>
          </div>

          <h3>Medium Team (10 Developers)</h3>
          <div className="not-prose bg-muted/30 rounded-xl p-6 my-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">US Team Annual Cost</span>
                  <span className="font-bold">$2,207,100</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Offshore Team Annual Cost</span>
                  <span className="font-bold text-green-600">$546,000</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="font-bold">Annual Savings</span>
                  <span className="text-xl font-bold text-green-600">$1,661,100</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                These savings could fund an entire product marketing team, infrastructure costs, and still have $500K left over.
              </div>
            </div>
          </div>

          <h3>Large Team (25 Developers)</h3>
          <div className="not-prose bg-muted/30 rounded-xl p-6 my-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">US Team Annual Cost</span>
                  <span className="font-bold">$5,517,750</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Offshore Team Annual Cost</span>
                  <span className="font-bold text-green-600">$1,365,000</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="font-bold">Annual Savings</span>
                  <span className="text-xl font-bold text-green-600">$4,152,750</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Over 3 years, that's $12.5M in savings - enough to fund multiple new product lines or acquisitions.
              </div>
            </div>
          </div>

          <h2>Beyond Salary: Hidden Cost Advantages</h2>
          <p>
            The savings extend far beyond base compensation. Here are additional financial benefits that companies often overlook:
          </p>

          <h3>1. Reduced Turnover Costs</h3>
          <p>
            Average tech turnover in the US is 13-18% annually. Each developer replacement costs:
          </p>
          <ul>
            <li><strong>Recruitment:</strong> $8,000-15,000 (agencies, job boards, HR time)</li>
            <li><strong>Lost productivity:</strong> 3-6 months at reduced output</li>
            <li><strong>Training:</strong> $5,000-10,000 in onboarding resources</li>
            <li><strong>Total per replacement:</strong> $50,000-100,000</li>
          </ul>
          <p>
            With PraKMas's managed offshore model, we handle recruitment, training, and knowledge retention. Our average developer tenure is 4.5 years vs. 2.1 years industry average.
          </p>

          <h3>2. Flexible Scaling Economics</h3>
          <p>
            Traditional hiring has significant sunk costs. Offshore models offer:
          </p>
          <ul>
            <li><strong>No recruitment fees:</strong> Save $15K-25K per hire</li>
            <li><strong>No severance risk:</strong> Built into service model</li>
            <li><strong>Rapid scale-up:</strong> Add developers in 2-4 weeks vs. 3-6 months</li>
            <li><strong>Rapid scale-down:</strong> Adjust team size with 30-day notice</li>
          </ul>

          <h3>3. Infrastructure Savings</h3>
          <p>
            Office space in tech hubs is expensive:
          </p>
          <ul>
            <li><strong>San Francisco:</strong> $85/sq ft annually + $150/sq ft build-out</li>
            <li><strong>New York:</strong> $72/sq ft annually + $130/sq ft build-out</li>
            <li><strong>Austin:</strong> $45/sq ft annually + $95/sq ft build-out</li>
          </ul>
          <p>
            For 25 developers (5,000 sq ft), that's $225K-425K annually plus one-time build-out costs of $475K-750K. All eliminated with offshore teams.
          </p>

          <h2>Real-World Case Study: SaaS Startup</h2>
          <div className="not-prose bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 my-8">
            <h3 className="text-2xl font-bold mb-4">From $2M Burn to Profitability</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Company Profile:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Series A SaaS company, HR tech vertical</li>
                <li>• $5M in funding, 18-month runway</li>
                <li>• 8 US-based developers ($1.8M annual cost)</li>
                <li>• Burning $150K/month, not yet profitable</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">The Challenge:</h4>
              <p className="text-muted-foreground">
                Needed to double engineering capacity to hit product milestones but couldn't afford another $1.8M in annual costs. VCs pressuring for path to profitability.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">PraKMas Solution:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Kept 3 senior US developers for core architecture ($660K/year)</li>
                <li>• Added 12 offshore developers for feature development ($655K/year)</li>
                <li>• Maintained 2 US + 3 offshore for QA & DevOps ($295K/year)</li>
                <li>• Total team: 20 developers for $1.61M (vs. $4.4M for US-only)</li>
              </ul>
            </div>

            <div className="bg-background/50 rounded-lg p-6">
              <h4 className="font-semibold mb-4">Results After 12 Months:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">$2.79M</div>
                  <div className="text-sm text-muted-foreground">Annual savings vs. US-only expansion</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">150%</div>
                  <div className="text-sm text-muted-foreground">Feature velocity increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">36 mo</div>
                  <div className="text-sm text-muted-foreground">Extended runway (from 18 months)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">Profitable</div>
                  <div className="text-sm text-muted-foreground">Reached profitability month 14</div>
                </div>
              </div>
            </div>
          </div>

          <h2>Cost Optimization Strategies</h2>
          <p>
            To maximize offshore ROI, consider these proven strategies:
          </p>

          <h3>1. Hybrid Team Structure</h3>
          <p>
            Don't go 100% offshore initially. The optimal mix:
          </p>
          <ul>
            <li><strong>30% onshore:</strong> Senior architects, product managers, key stakeholders</li>
            <li><strong>70% offshore:</strong> Implementation, testing, documentation, support</li>
          </ul>
          <p>
            This structure balances cost savings (55-60% vs. fully onshore) with strategic control and customer proximity.
          </p>

          <h3>2. Right-Size Seniority Mix</h3>
          <p>
            Don't default to all senior developers. Optimize the blend:
          </p>
          <ul>
            <li><strong>20% Senior:</strong> Architecture, complex features, mentorship</li>
            <li><strong>50% Mid-Level:</strong> Feature development, integration work</li>
            <li><strong>30% Junior:</strong> Testing, documentation, simple features</li>
          </ul>
          <p>
            This pyramid structure saves an additional 15-20% while maintaining quality through proper mentorship.
          </p>

          <h3>3. Invest in Tools & Automation</h3>
          <p>
            Don't penny-pinch on development infrastructure:
          </p>
          <ul>
            <li><strong>CI/CD pipelines:</strong> $500-2,000/month → saves 40 hours/week</li>
            <li><strong>Monitoring & logging:</strong> $300-1,500/month → prevents costly outages</li>
            <li><strong>Collaboration tools:</strong> $200-800/month → improves communication efficiency</li>
          </ul>
          <p>
            These $2,000-4,000/month investments pay for themselves through productivity gains and risk reduction.
          </p>

          <h2>Common Cost Pitfalls to Avoid</h2>
          
          <div className="not-prose space-y-4 my-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-red-600">❌</span> Choosing Based on Price Alone
              </h4>
              <p className="text-sm text-muted-foreground">
                The cheapest offshore provider often has hidden costs in rework, communication overhead, and quality issues. PraKMas isn't the cheapest, but our TCO is typically 20-30% lower than budget providers.
              </p>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-red-600">❌</span> Underinvesting in Management
              </h4>
              <p className="text-sm text-muted-foreground">
                Offshore teams need active management. Budget for dedicated project managers or technical leads. The $10K-15K/month cost prevents $50K-100K in miscommunication and rework.
              </p>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-red-600">❌</span> Ignoring Time Zone Overlap
              </h4>
              <p className="text-sm text-muted-foreground">
                Teams with zero overlap hours have 40-60% productivity loss. India has 4-5 hour overlap with US East Coast. Value this - it's worth $20K-30K annually per developer in productivity.
              </p>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-red-600">❌</span> Not Accounting for Knowledge Transfer
              </h4>
              <p className="text-sm text-muted-foreground">
                First 2-3 months require 50% more time investment for onboarding. Budget for this ramp-up period. After that, you'll see the full cost savings materialize.
              </p>
            </div>
          </div>

          <h2>ROI Timeline & Expectations</h2>
          <p>
            Understanding when savings materialize helps set realistic expectations:
          </p>

          <div className="not-prose bg-muted/30 rounded-xl p-6 my-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Months 1-3: Setup Phase</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>• Cost savings: 20-40% (during ramp-up)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Productivity: 40-60% of full capacity</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Focus: Knowledge transfer, process alignment</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Months 4-6: Optimization Phase</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>• Cost savings: 50-65% (approaching target)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Productivity: 75-90% of full capacity</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Focus: Process refinement, autonomy building</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Months 7-12: Full Value Phase</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>• Cost savings: 65-75% (full realization)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Productivity: 95-110% (offshore advantages kick in)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Focus: Scaling, continuous improvement</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Year 2+: Compounding Benefits</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>• Additional 10-15% savings through process maturity</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Team tenure reduces replacement costs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Follow-the-sun advantages for 24/7 operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2>Calculate Your Potential Savings</h2>
          <p>
            Want to see your specific numbers? Here's a quick calculator framework:
          </p>

          <div className="not-prose bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold mb-4">Your Custom ROI Formula</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">Current Developer Count:</label>
                <div className="text-muted-foreground text-sm">_____ developers × $220,000 = $_______ annual cost</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Desired Offshore Percentage:</label>
                <div className="text-muted-foreground text-sm">_____ % × (developers) = _____ offshore developers</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Offshore Cost Calculation:</label>
                <div className="text-muted-foreground text-sm">_____ offshore devs × $54,600 = $_______ annual cost</div>
              </div>
              
              <div className="border-t border-border pt-4">
                <label className="block text-sm font-medium mb-1">Your Annual Savings:</label>
                <div className="text-2xl font-bold text-green-600">$_______ per year</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Get Detailed ROI Analysis
                </Button>
              </Link>
            </div>
          </div>

          <h2>Getting Started: Investment Requirements</h2>
          <p>
            To help you budget accurately, here's what starting with offshore development requires:
          </p>

          <h3>Minimum Viable Offshore Team</h3>
          <ul>
            <li><strong>Team size:</strong> 3-5 developers (smaller teams have higher overhead per person)</li>
            <li><strong>Duration:</strong> 6-month minimum commitment (covers ramp-up and value realization)</li>
            <li><strong>Monthly investment:</strong> $15,000-25,000 for 3-5 person team</li>
            <li><strong>Setup costs:</strong> $5,000-8,000 one-time (infrastructure, onboarding, legal)</li>
          </ul>

          <h3>What's Included in PraKMas Pricing</h3>
          <ul>
            <li>Dedicated developers (not shared across projects)</li>
            <li>Development infrastructure & tools</li>
            <li>Project management & coordination</li>
            <li>Quality assurance & code reviews</li>
            <li>Knowledge management & documentation</li>
            <li>Compliance & legal support</li>
            <li>Ongoing recruitment & retention</li>
          </ul>

          <h2>Next Steps: Start Saving Today</h2>
          <p>
            Ready to reduce your development costs by 60-70% while maintaining quality? Here's how to get started:
          </p>

          <div className="not-prose space-y-3 my-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">1</div>
              <div>
                <h4 className="font-semibold mb-1">Free Cost Analysis</h4>
                <p className="text-sm text-muted-foreground">Share your current team structure. We'll provide a detailed savings analysis within 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">2</div>
              <div>
                <h4 className="font-semibold mb-1">Meet Your Team</h4>
                <p className="text-sm text-muted-foreground">Interview 3-5 pre-vetted developers matched to your tech stack. No obligation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">3</div>
              <div>
                <h4 className="font-semibold mb-1">Pilot Project (Optional)</h4>
                <p className="text-sm text-muted-foreground">Start with a 1-month pilot on a small project. Validate quality before committing long-term.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">4</div>
              <div>
                <h4 className="font-semibold mb-1">Scale & Save</h4>
                <p className="text-sm text-muted-foreground">Expand your team over 3-6 months. Realize full savings by month 12.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stop Overpaying for Development</h2>
            <p className="text-muted-foreground mb-6">
              Get a free, no-obligation cost analysis and see exactly how much your organization could save with PraKMas's offshore development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculate My Savings
                </Button>
              </Link>
              <Link href="/global-consulting">
                <Button size="lg" variant="outline" className="gap-2">
                  <Globe className="h-5 w-5" />
                  Learn About Our Services
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