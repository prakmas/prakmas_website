import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Briefcase, TrendingUp, Target, Award, Users, Code } from 'lucide-react';
import Link from 'next/link';

export default function TechCareerPaths2025Page() {
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
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Career Development
            </span>
            <span className="text-muted-foreground">•</span>
            <time className="text-muted-foreground">November 18, 2025</time>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">10 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tech Career Paths 2025: Your Complete Roadmap
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Navigate the evolving tech landscape with insider insights on 12 high-growth career paths, salary expectations, skill requirements, and transition strategies based on 800+ successful placements.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <Award className="h-8 w-8 text-blue-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">₹8-35L</div>
            <div className="text-sm text-muted-foreground">Salary Range (Entry-Mid)</div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">28%</div>
            <div className="text-sm text-muted-foreground">YoY Tech Job Growth</div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <Users className="h-8 w-8 text-purple-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">800+</div>
            <div className="text-sm text-muted-foreground">Careers Launched</div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>The Tech Career Landscape in 2025</h2>
          <p>
            The tech industry is transforming faster than ever. AI is reshaping roles, remote work has globalized competition, and emerging technologies are creating entirely new career paths. Here's what's actually happening in the market based on our placement data from 800+ graduates:
          </p>

          <div className="not-prose bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold mb-4">Key 2025 Market Insights</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Demand outpaces supply:</strong> India has 5M+ developers but 1.2M unfilled positions (NASSCOM 2025)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>AI is a multiplier, not replacement:</strong> AI-skilled developers earn 30-40% more, not less
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Full-stack dominance:</strong> 68% of job postings seek full-stack capabilities (vs. 45% in 2024)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Tier-2/3 city boom:</strong> Remote work driving 45% of hires outside major metros
                </div>
              </div>
            </div>
          </div>

          <h2>The 12 High-Growth Career Paths</h2>
          <p>
            Based on hiring trends, salary growth, and job security, here are the top career paths for 2025 and beyond:
          </p>

          {/* Career Path 1: Full-Stack Developer */}
          <div className="not-prose bg-muted/30 rounded-xl p-8 my-6 border-l-4 border-blue-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">1. Full-Stack Developer</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-600 text-xs rounded">High Demand</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-600 text-xs rounded">Great Entry Point</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">₹6-15L</div>
                <div className="text-xs text-muted-foreground">Entry-Level</div>
              </div>
            </div>
            
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">What You'll Do:</h4>
                <p className="text-muted-foreground">
                  Build complete web applications from database to UI. Handle both server-side (Node.js, Python, Java) and client-side (React, Vue, Angular) development. Deploy and maintain applications in production.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Core Skills Required:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div>
                    <strong>Frontend:</strong> React/Next.js, TypeScript, Tailwind CSS
                  </div>
                  <div>
                    <strong>Backend:</strong> Node.js/Express or Python/Django
                  </div>
                  <div>
                    <strong>Database:</strong> PostgreSQL, MongoDB basics
                  </div>
                  <div>
                    <strong>Tools:</strong> Git, Docker, REST APIs
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Career Progression:</h4>
                <div className="space-y-1 text-muted-foreground">
                  <div>→ <strong>2-3 years:</strong> Senior Full-Stack (₹12-20L)</div>
                  <div>→ <strong>4-6 years:</strong> Tech Lead (₹18-30L)</div>
                  <div>→ <strong>7+ years:</strong> Engineering Manager or Principal Engineer (₹25-50L)</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Best For:</h4>
                <p className="text-muted-foreground">
                  Those who enjoy seeing projects through end-to-end, startups/scale-ups (70% of openings), and people who like variety over deep specialization.
                </p>
              </div>
            </div>
          </div>

          {/* Career Path 2: AI/ML Engineer */}
          <div className="not-prose bg-muted/30 rounded-xl p-8 my-6 border-l-4 border-purple-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">2. AI/ML Engineer</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-600 text-xs rounded">Highest Growth</span>
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-600 text-xs rounded">Premium Salaries</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">₹10-22L</div>
                <div className="text-xs text-muted-foreground">Entry-Level</div>
              </div>
            </div>
            
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">What You'll Do:</h4>
                <p className="text-muted-foreground">
                  Design and implement machine learning models. Work with large datasets, train models, deploy ML pipelines. Integrate AI capabilities (LLMs, computer vision, NLP) into applications.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Core Skills Required:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div>
                    <strong>Languages:</strong> Python (essential), SQL
                  </div>
                  <div>
                    <strong>ML Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn
                  </div>
                  <div>
                    <strong>Math:</strong> Linear algebra, statistics, calculus
                  </div>
                  <div>
                    <strong>Tools:</strong> Jupyter, MLflow, Kubernetes
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Career Progression:</h4>
                <div className="space-y-1 text-muted-foreground">
                  <div>→ <strong>2-3 years:</strong> Senior ML Engineer (₹18-30L)</div>
                  <div>→ <strong>4-6 years:</strong> ML Lead/Research Engineer (₹28-50L)</div>
                  <div>→ <strong>7+ years:</strong> ML Architect or Director AI (₹45-80L+)</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Best For:</h4>
                <p className="text-muted-foreground">
                  Math/stats background, enjoy problem-solving and experimentation, interested in cutting-edge tech. Note: Requires degree or demonstrated expertise (bootcamps less accepted).
                </p>
              </div>
            </div>
          </div>

          {/* Career Path 3: DevOps/SRE Engineer */}
          <div className="not-prose bg-muted/30 rounded-xl p-8 my-6 border-l-4 border-green-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">3. DevOps/SRE Engineer</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-green-500/10 text-green-600 text-xs rounded">High Job Security</span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-600 text-xs rounded">Remote-Friendly</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">₹8-18L</div>
                <div className="text-xs text-muted-foreground">Entry-Level</div>
              </div>
            </div>
            
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">What You'll Do:</h4>
                <p className="text-muted-foreground">
                  Automate deployment pipelines, manage cloud infrastructure, ensure system reliability and performance. Set up monitoring, logging, and incident response. Bridge development and operations teams.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Core Skills Required:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div>
                    <strong>Cloud:</strong> AWS, Azure, or GCP (pick one, master it)
                  </div>
                  <div>
                    <strong>Containers:</strong> Docker, Kubernetes
                  </div>
                  <div>
                    <strong>IaC:</strong> Terraform, Ansible
                  </div>
                  <div>
                    <strong>Scripting:</strong> Bash, Python
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Career Progression:</h4>
                <div className="space-y-1 text-muted-foreground">
                  <div>→ <strong>2-3 years:</strong> Senior DevOps (₹15-25L)</div>
                  <div>→ <strong>4-6 years:</strong> DevOps Lead/SRE (₹22-38L)</div>
                  <div>→ <strong>7+ years:</strong> Platform Engineering Director (₹35-60L)</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Best For:</h4>
                <p className="text-muted-foreground">
                  System thinkers, enjoy automation and optimization, like working "behind the scenes." Great transition from sysadmin or backend dev roles.
                </p>
              </div>
            </div>
          </div>

          {/* Career Path 4: Mobile Developer */}
          <div className="not-prose bg-muted/30 rounded-xl p-8 my-6 border-l-4 border-cyan-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">4. Mobile Developer (React Native/Flutter)</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-600 text-xs rounded">Growing Demand</span>
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-600 text-xs rounded">Startup Favorite</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">₹7-16L</div>
                <div className="text-xs text-muted-foreground">Entry-Level</div>
              </div>
            </div>
            
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">What You'll Do:</h4>
                <p className="text-muted-foreground">
                  Build mobile applications for iOS and Android. Use cross-platform frameworks (React Native, Flutter) or native (Swift, Kotlin). Handle mobile-specific concerns like offline-first, performance, app store publishing.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Core Skills Required:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div>
                    <strong>Framework:</strong> React Native or Flutter (choose one)
                  </div>
                  <div>
                    <strong>Language:</strong> JavaScript/TypeScript or Dart
                  </div>
                  <div>
                    <strong>Mobile UX:</strong> Platform guidelines, responsive design
                  </div>
                  <div>
                    <strong>APIs:</strong> REST, GraphQL, push notifications
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">2025 Market Note:</h4>
                <p className="text-sm bg-cyan-500/10 border border-cyan-500/20 rounded p-3 text-muted-foreground">
                  <strong>Cross-platform developers in high demand:</strong> Companies want "write once, deploy everywhere." React Native (JavaScript familiarity) and Flutter (superior performance) are both excellent choices. React Native has more jobs; Flutter pays 10-15% more.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Career Progression:</h4>
                <div className="space-y-1 text-muted-foreground">
                  <div>→ <strong>2-3 years:</strong> Senior Mobile Dev (₹14-24L)</div>
                  <div>→ <strong>4-6 years:</strong> Mobile Lead (₹20-35L)</div>
                  <div>→ <strong>7+ years:</strong> Mobile Architect (₹28-50L)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Overview for Remaining 8 Paths */}
          <h2>8 More High-Value Career Paths</h2>
          <p>
            Here's a quick reference for additional career options worth considering:
          </p>

          <div className="not-prose space-y-4 my-6">
            <div className="bg-muted/30 rounded-lg p-4 border-l-2 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">5. Data Engineer</h4>
                <div className="text-right"><span className="text-green-600 font-bold">₹9-20L</span></div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Build data pipelines, ETL processes, data warehouses. Work with big data tools (Spark, Airflow, Kafka). Essential for companies with large datasets.
              </p>
              <div className="text-xs"><strong>Key Skills:</strong> Python, SQL, Spark, cloud data services (Snowflake, Databricks)</div>
              <div className="text-xs mt-1"><strong>Growth:</strong> 32% YoY | <strong>Why hot:</strong> Every company becoming data-driven</div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border-l-2 border-pink-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">6. Cloud Architect</h4>
                <div className="text-right"><span className="text-green-600 font-bold">₹15-35L</span></div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Design cloud infrastructure, migration strategies, cost optimization. Requires 4-6 years experience typically. Enterprise-focused role.
              </p>
              <div className="text-xs"><strong>Key Skills:</strong> AWS/Azure Solutions Architect cert, multi-cloud, FinOps, security</div>
              <div className="text-xs mt-1"><strong>Path:</strong> Start as DevOps → Cloud Engineer → Architect (5-7 years)</div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border-l-2 border-indigo-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">7. Security Engineer</h4>
                <div className="text-right"><span className="text-green-600 font-bold">₹10-25L</span></div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Protect applications and infrastructure from threats. Pentesting, security audits, compliance. High job security, growing urgency.
              </p>
              <div className="text-xs"><strong>Key Skills:</strong> Ethical hacking, OWASP, security tools (Burp Suite, Metasploit), certifications (CEH, OSCP)</div>
              <div className="text-xs mt-1"><strong>Demand:</strong> 40% YoY growth | <strong>Note:</strong> Requires security mindset + dev skills</div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border-l-2 border-yellow-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">8. Product Manager (Technical)</h4>
                <div className="text-right"><span className="text-green-600 font-bold">₹12-28L</span></div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Define product strategy, roadmap, features. Bridge business and engineering. Requires technical background + business acumen.
              </p>
              <div className="text-xs"><strong>Key Skills:</strong> Product strategy, user research, data analysis, stakeholder management</div>
              <div className="text-xs mt-1"><strong>Transition:</strong> Developers with 3-5 years can pivot via MBA or direct transition</div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border-l-2 border-teal-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">9. QA Automation Engineer</h4>
                <div className="text-right"><span className="text-green-600 font-bold">₹5-12L</span></div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Build automated test frameworks, CI/CD integration, ensure software quality. Great entry point, often overlooked by job seekers (less competition).
              </p>
              <div className="text-xs"><strong>Key Skills:</strong> Selenium, Cypress, Jest, Python/JavaScript, CI/CD</div>
              <div className="text-xs mt-1"><strong>Career path:</strong> QA → QA Lead → SDET → Engineering Manager</div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border-l-2 border-red-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">10. UI/UX Engineer</h4>
                <div className="text-right"><span className="text-green-600 font-bold">₹6-14L</span></div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Hybrid design-developer role. Implement designs in code, build design systems, ensure great user experience. Requires both creative and technical skills.
              </p>
              <div className="text-xs"><strong>Key Skills:</strong> Figma, React, CSS/Tailwind, design systems, accessibility (a11y)</div>
              <div className="text-xs mt-1"><strong>Unique value:</strong> Rare skill combo commands 20-30% premium over pure frontend devs</div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border-l-2 border-lime-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">11. Blockchain Developer</h4>
                <div className="text-right"><span className="text-green-600 font-bold">₹12-30L</span></div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Build decentralized applications (dApps), smart contracts. Volatile market but high paying. Web3 companies, crypto exchanges, NFT platforms.
              </p>
              <div className="text-xs"><strong>Key Skills:</strong> Solidity, Web3.js, Ethereum, smart contract security</div>
              <div className="text-xs mt-1"><strong>Risk/Reward:</strong> Highest salaries, but market cyclical (depends on crypto trends)</div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border-l-2 border-violet-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">12. Technical Content Creator / DevRel</h4>
                <div className="text-right"><span className="text-green-600 font-bold">₹8-20L</span></div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Create technical content, demos, tutorials. Build developer communities. For devs who love teaching and communication. B2B SaaS, dev tools companies.
              </p>
              <div className="text-xs"><strong>Key Skills:</strong> Strong dev skills + writing/video + public speaking + social media</div>
              <div className="text-xs mt-1"><strong>Lifestyle:</strong> Flexible, creative, travel to conferences | <strong>Note:</strong> Requires proven content portfolio</div>
            </div>
          </div>

          <h2>Choosing the Right Path: Decision Framework</h2>
          <p>
            With 12 viable options, how do you choose? Use this decision framework based on 800+ career counseling sessions:
          </p>

          <div className="not-prose bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4">The 4-Factor Decision Matrix</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Your Background & Skills</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li><strong>If CS/Engineering degree:</strong> All paths open, consider AI/ML for highest ceiling</li>
                  <li><strong>If non-tech background:</strong> Start with full-stack or QA (easier entry), transition later</li>
                  <li><strong>If strong math/stats:</strong> AI/ML or Data Engineering excellent fit</li>
                  <li><strong>If systems thinking:</strong> DevOps, Cloud, Security ideal matches</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Market Demand & Competition</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li><strong>Highest demand, highest competition:</strong> Full-stack (pick if you can differentiate)</li>
                  <li><strong>High demand, lower competition:</strong> DevOps, Data Engineering, Security (sweet spot)</li>
                  <li><strong>Emerging, uncertain:</strong> Blockchain (high risk, high reward)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Salary & Growth Potential</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li><strong>Highest immediate salaries:</strong> AI/ML, Blockchain, Security</li>
                  <li><strong>Best long-term growth:</strong> Full-stack → Tech Lead → CTO path</li>
                  <li><strong>Steady progression:</strong> DevOps, Data Engineering, Cloud Architecture</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. Lifestyle & Work Preferences</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li><strong>Most remote-friendly:</strong> DevOps, Backend, Content Creation</li>
                  <li><strong>Requires office presence:</strong> Security (sometimes), Product Management</li>
                  <li><strong>On-call expectations:</strong> DevOps/SRE, Security (incident response)</li>
                  <li><strong>Most creative:</strong> UI/UX Engineering, Mobile, Content Creation</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>The 6-Month Career Launch Plan</h2>
          <p>
            Once you've chosen a path, here's a proven 6-month plan to land your first role (adapted based on your chosen specialization):
          </p>

          <div className="not-prose space-y-4 my-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center font-bold text-blue-600 text-sm">1</span>
                Month 1-2: Foundation Building
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground ml-10">
                <li>• Complete core technology courses (specific to your path)</li>
                <li>• Build 2-3 small projects demonstrating fundamentals</li>
                <li>• Set up GitHub, LinkedIn, resume with projects</li>
                <li>• Join relevant communities (Discord servers, Reddit, dev.to)</li>
              </ul>
              <div className="text-xs mt-3 ml-10 bg-background/50 p-3 rounded">
                <strong>Time commitment:</strong> 40-50 hours/week if full-time, 20-25 if working
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center font-bold text-green-600 text-sm">2</span>
                Month 3-4: Advanced Skills & Portfolio
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground ml-10">
                <li>• Build 1-2 complex, production-quality projects</li>
                <li>• Contribute to open source (shows collaboration skills)</li>
                <li>• Write technical blogs about what you're learning</li>
                <li>• Start practicing interview questions (LeetCode, system design)</li>
              </ul>
              <div className="text-xs mt-3 ml-10 bg-background/50 p-3 rounded">
                <strong>Goal:</strong> Have portfolio impressive enough to get interviews
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center font-bold text-purple-600 text-sm">3</span>
                Month 5: Application Blitz
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground ml-10">
                <li>• Apply to 50-100 positions (use LinkedIn, Naukri, AngelList, company sites)</li>
                <li>• Customize resume for each application category</li>
                <li>• Network: reach out to PraKMas alumni, attend meetups</li>
                <li>• Consider recruiting agencies (PraKMas placement support, Triplebyte, etc.)</li>
              </ul>
              <div className="text-xs mt-3 ml-10 bg-background/50 p-3 rounded">
                <strong>Target:</strong> 5-10 interview opportunities by month-end
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center font-bold text-orange-600 text-sm">4</span>
                Month 6: Interview & Negotiation
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground ml-10">
                <li>• Complete interview processes (typically 3-4 rounds each)</li>
                <li>• Continue applying (don't stop until you have signed offer)</li>
                <li>• Practice mock interviews with peers</li>
                <li>• Negotiate offers (aim for 10-20% above first offer)</li>
              </ul>
              <div className="text-xs mt-3 ml-10 bg-background/50 p-3 rounded">
                <strong>Success metric:</strong> 1-3 job offers to choose from
              </div>
            </div>
          </div>

          <h2>Salary Negotiation: Get What You Deserve</h2>
          <p>
            Based on 800+ negotiated offers, here's what works:
          </p>

          <div className="not-prose bg-green-500/10 border border-green-500/20 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold mb-4">Negotiation Tactics That Work</h3>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold mb-1">1. Never give first number</h4>
                <p className="text-muted-foreground">
                  When asked "What are your salary expectations?" say: <em>"I'd like to learn more about the role first. What's the budgeted range for this position?"</em>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">2. Always have competing offers (or appear to)</h4>
                <p className="text-muted-foreground">
                  <em>"I have another offer at ₹X, but I prefer your company because [genuine reason]. Can you match or exceed?"</em> Works 70% of the time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">3. Negotiate total compensation, not just base</h4>
                <p className="text-muted-foreground">
                  Consider: Base + Bonus + Stock Options + Benefits + WFH + Learning Budget. Sometimes companies can't budge on base but will add ₹50K learning budget or extra PTO.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">4. Use industry data</h4>
                <p className="text-muted-foreground">
                  <em>"According to Glassdoor/AmbitionBox, the median for this role in Bangalore is ₹X. Given my [specific skills], I was hoping for something in the ₹Y range."</em>
                </p>
              </div>
            </div>
          </div>

          <h2>How PraKMas Accelerates Your Journey</h2>
          <p>
            We've launched 800+ tech careers. Here's how our program compresses the 6-month timeline into a structured, mentor-led experience:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Structured Curriculum</h4>
              <p className="text-sm text-muted-foreground mb-3">
                6-month program covering your chosen path with projects, code reviews, and certifications. No more "what to learn next?" paralysis.
              </p>
              <div className="text-sm"><strong>Saves:</strong> 2-3 months of self-directed learning confusion</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Industry Mentors</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Weekly 1:1s with senior developers from top companies. Portfolio reviews, mock interviews, career guidance.
              </p>
              <div className="text-sm"><strong>Value:</strong> Insider knowledge you can't get from online courses</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Real Projects, Real Companies</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Work on actual client projects in months 4-6. Portfolio pieces that demonstrate production experience, not just tutorials.
              </p>
              <div className="text-sm"><strong>Advantage:</strong> "1 year experience" on resume from day one</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Placement Guarantee (92% rate)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Direct connections to 50+ hiring partners. Dedicated placement team handling applications, interview prep, and salary negotiation.
              </p>
              <div className="text-sm"><strong>Result:</strong> ₹6.5L average package, up to ₹15L for top performers</div>
            </div>
          </div>

          <div className="not-prose bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold mb-3">Limited Spots: Next Cohort Starts Jan 15, 2026</h3>
            <p className="text-muted-foreground mb-4">
              We cap cohorts at 30 students to maintain quality mentorship. December 2025 batch filled in 12 days. Secure your spot with ₹5,000 refundable deposit.
            </p>
            <div className="text-sm space-y-2">
              <div><strong>Application deadline:</strong> January 5, 2026</div>
              <div><strong>Program duration:</strong> 6 months (Jan 15 - Jul 15, 2026)</div>
              <div><strong>Format:</strong> Full-time (recommended) or Part-time (evenings/weekends)</div>
              <div><strong>Investment:</strong> ₹1.2L total or ₹25K/month (EMI available)</div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Launch Your Tech Career?</h2>
            <p className="text-muted-foreground mb-6">
              Schedule a free 30-minute career counseling call. We'll assess your background, recommend the best path, and share our program details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/training-internships">
                <Button size="lg" className="gap-2">
                  <Target className="h-5 w-5" />
                  View Training Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  <Briefcase className="h-5 w-5" />
                  Schedule Career Call
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