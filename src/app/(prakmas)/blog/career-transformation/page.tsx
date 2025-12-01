import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, GraduationCap, TrendingUp, Award, Briefcase, Target, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button-variants";

export default function CareerTransformationBlog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Link href="/resources">
            <Button variant="ghost" className="mb-8 hover:bg-muted">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <GraduationCap className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-cyan-500">Career Development</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              From Bootcamp to ₹6.5L Package: How PraKMas Transforms Careers in 6 Months
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                November 25, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              In an industry where most coding bootcamps promise dreams but deliver disappointment, PraKMas has quietly achieved what seemed impossible: a 92% placement rate with an average package of ₹6.5 lakhs. Here's how we're rewriting the rules of tech education.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Harsh Reality of Tech Education</h2>
            <p className="leading-relaxed mb-6">
              Walk into any traditional bootcamp and you'll see the same pattern: students frantically copying code from tutorials, building todo apps for the hundredth time, and graduating with portfolios that look suspiciously identical. The result? A 60-70% unemployment rate among bootcamp graduates.
            </p>
            <p className="leading-relaxed mb-6">
              Why? Because most programs teach syntax, not skills. They focus on frameworks, not fundamentals. And they prepare students for exams, not employment.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
              <div className="p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border">
                <TrendingUp className="w-10 h-10 text-cyan-500 mb-4" />
                <div className="text-3xl font-bold mb-2">92%</div>
                <p className="text-sm text-muted-foreground">Placement Rate</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border">
                <Award className="w-10 h-10 text-orange-500 mb-4" />
                <div className="text-3xl font-bold mb-2">₹6.5L</div>
                <p className="text-sm text-muted-foreground">Average Package</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border">
                <Users className="w-10 h-10 text-green-500 mb-4" />
                <div className="text-3xl font-bold mb-2">800+</div>
                <p className="text-sm text-muted-foreground">Alumni Placed</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">The PraKMas Difference: Real Projects, Real Skills</h2>
            <p className="leading-relaxed mb-6">
              From day one, PraKMas students work on actual client projects. Not simulated exercises. Not hypothetical scenarios. Real applications that real businesses depend on.
            </p>
            <p className="leading-relaxed mb-6">
              Here's what a typical 6-month journey looks like:
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Month 1-2: Foundation Phase</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Week 1-4:</strong> JavaScript fundamentals, ES6+, asynchronous programming</li>
              <li><strong>Week 5-8:</strong> React basics, component architecture, state management</li>
              <li><strong>Project:</strong> Build a task management app with user authentication</li>
              <li><strong>Real Experience:</strong> Daily code reviews from senior developers, pair programming sessions</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Month 3-4: Advanced Development</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Week 9-12:</strong> Node.js, Express, RESTful APIs, database design (MongoDB/PostgreSQL)</li>
              <li><strong>Week 13-16:</strong> Next.js, server-side rendering, authentication, deployment</li>
              <li><strong>Project:</strong> Full-stack e-commerce platform with payment integration</li>
              <li><strong>Real Experience:</strong> Work directly with PraKMas's client projects under mentorship</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Month 5: Specialization & Client Work</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Choose Your Path:</strong> Frontend (React Native, animations), Backend (microservices, GraphQL), or DevOps (Docker, CI/CD)</li>
              <li><strong>Client Project Assignment:</strong> Join PraKMas development team on actual paid projects</li>
              <li><strong>Real Experience:</strong> Sprint planning, standup meetings, production deployments</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Month 6: Job Preparation & Placement</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Portfolio Development:</strong> Professional GitHub profile, deployed projects, technical blog posts</li>
              <li><strong>Interview Training:</strong> Mock interviews with industry professionals, system design practice</li>
              <li><strong>Company Introductions:</strong> Direct referrals to 50+ hiring partners</li>
              <li><strong>Guaranteed Internship:</strong> 3-6 month paid internship opportunity</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Success Story: Priya's Journey</h2>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-orange-500/10 border border-cyan-500/20 my-8">
              <p className="font-semibold mb-4">From Civil Engineer to Senior Developer at Accenture</p>
              <p className="mb-4 italic text-muted-foreground">
                "I graduated with a civil engineering degree but knew I wanted to code. After 3 failed attempts at self-learning and one expensive bootcamp that taught me nothing practical, I found PraKMas."
              </p>
              <p className="mb-4">
                <strong>The Transformation:</strong>
              </p>
              <ul className="space-y-2">
                <li>✅ Started with zero coding experience</li>
                <li>✅ Built 8 production-ready projects in 6 months</li>
                <li>✅ Contributed to real client work during training</li>
                <li>✅ Received 4 job offers ranging from ₹5.5L to ₹7.5L</li>
                <li>✅ Accepted position at Accenture for ₹7L package</li>
                <li>✅ Promoted to Senior Developer within 18 months</li>
              </ul>
              <p className="mt-4 font-semibold">
                "PraKMas didn't just teach me to code. They taught me to think like a professional developer."
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Why Our Placement Rate Is 92% (Not 100%)</h2>
            <p className="leading-relaxed mb-6">
              Notice we don't claim 100% placement? That's intentional honesty. The 8% who don't get placed fall into three categories:
            </p>
            <ul className="space-y-2 mb-6">
              <li><strong>Personal reasons (4%):</strong> Family commitments, relocation, higher education</li>
              <li><strong>Didn't complete program (2%):</strong> Dropped out after 3-4 months</li>
              <li><strong>Rejected multiple offers (2%):</strong> Waiting for specific companies or locations</li>
            </ul>
            <p className="leading-relaxed mb-6">
              For students who complete the program and actively participate in placement efforts, the success rate is 98%.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Secret Ingredient: Industry Partnerships</h2>
            <p className="leading-relaxed mb-6">
              PraKMas maintains active partnerships with 50+ companies including:
            </p>
            <ul className="space-y-2 mb-6">
              <li><strong>Service Giants:</strong> TCS, Infosys, Wipro, Cognizant, Accenture</li>
              <li><strong>Product Companies:</strong> Zoho, Freshworks, MakeMyTrip, PayTM</li>
              <li><strong>Startups:</strong> 30+ funded startups hiring actively</li>
              <li><strong>Global Companies:</strong> Amazon, Microsoft, Goldman Sachs (offshore roles)</li>
            </ul>
            <p className="leading-relaxed mb-6">
              These aren't just placement partners—they actively inform our curriculum. When React 19 launched, we updated our courses within 2 weeks. When companies requested Next.js experience, we integrated it into the core program.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Beyond Technical Skills: The Complete Package</h2>
            <p className="leading-relaxed mb-6">
              Technical skills get you the interview. But these skills get you the offer:
            </p>
            <ul className="space-y-2 mb-6">
              <li><strong>Communication:</strong> Weekly presentations on technical topics</li>
              <li><strong>Collaboration:</strong> Team projects with Git workflows and code reviews</li>
              <li><strong>Problem-Solving:</strong> Daily algorithmic challenges and system design</li>
              <li><strong>Professional Etiquette:</strong> Email writing, meeting participation, work ethic</li>
              <li><strong>Resume Building:</strong> ATS-optimized resumes that get past HR filters</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Investment Breakdown</h2>
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border my-8">
              <p className="font-semibold mb-4">Traditional Bootcamp vs PraKMas</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2">Feature</th>
                    <th className="text-left py-2">Traditional</th>
                    <th className="text-left py-2">PraKMas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Duration</td>
                    <td className="py-2">3-4 months</td>
                    <td className="py-2 font-semibold">6 months</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Real Projects</td>
                    <td className="py-2">0-1 simulated</td>
                    <td className="py-2 font-semibold">5+ client projects</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Internship</td>
                    <td className="py-2">Not included</td>
                    <td className="py-2 font-semibold">Guaranteed 3-6 months</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Placement Support</td>
                    <td className="py-2">Resume tips</td>
                    <td className="py-2 font-semibold">Direct referrals + prep</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Placement Rate</td>
                    <td className="py-2">30-40%</td>
                    <td className="py-2 font-semibold">92%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Avg Package</td>
                    <td className="py-2">₹3-4L</td>
                    <td className="py-2 font-semibold">₹6.5L</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Who Should (and Shouldn't) Apply</h2>
            <p className="leading-relaxed mb-4"><strong>Perfect Candidates:</strong></p>
            <ul className="space-y-2 mb-6">
              <li>Recent graduates looking to break into tech</li>
              <li>Professionals transitioning from non-tech roles</li>
              <li>Anyone willing to commit 6-8 hours daily for 6 months</li>
              <li>Self-motivated learners who embrace challenges</li>
            </ul>

            <p className="leading-relaxed mb-4"><strong>Not a Good Fit:</strong></p>
            <ul className="space-y-2 mb-6">
              <li>Looking for passive video-based learning</li>
              <li>Can't commit to full-time intensive training</li>
              <li>Expecting to get rich quick with minimal effort</li>
              <li>Not comfortable with English (our instruction language)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Next Cohort</h2>
            <p className="leading-relaxed mb-6">
              We intentionally keep batch sizes small (30 students max) to ensure personalized attention. Our next cohort starts January 15, 2026.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Application Process:</strong>
            </p>
            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <li><strong>Online Application:</strong> 10-minute form + coding aptitude test</li>
              <li><strong>Technical Interview:</strong> 30-minute problem-solving session</li>
              <li><strong>Career Discussion:</strong> 15-minute call about goals and expectations</li>
              <li><strong>Offer & Enrollment:</strong> Decision within 48 hours</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion: Investment in Your Future</h2>
            <p className="leading-relaxed mb-6">
              PraKMas isn't the cheapest bootcamp. We're not the fastest either. But with 800+ success stories, a 92% placement rate, and an average package of ₹6.5L, we're demonstrably the most effective.
            </p>
            <p className="leading-relaxed mb-6">
              Six months of intensive training. Real projects. Guaranteed internship. Industry certifications. Direct company referrals. Lifetime career support.
            </p>
            <p className="leading-relaxed mb-6">
              Your career transformation starts here.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-orange-500/10 border border-cyan-500/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
              <p className="text-muted-foreground mb-6">
                Limited seats available for January 2026 cohort. Apply now for early bird discount.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/training-internships">
                  <Button size="lg" variant="hero">
                    View Programs
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Schedule Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
