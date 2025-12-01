import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Code, Users, CheckCircle, Brain, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function InterviewGuidePage() {
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
            <time className="text-muted-foreground">November 15, 2025</time>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">12 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Complete Tech Interview Preparation Guide for 2025
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Master coding interviews, system design, and behavioral questions with proven strategies from 800+ successful placements. Everything you need to land your dream tech job.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <Code className="h-8 w-8 text-blue-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">150+</div>
            <div className="text-sm text-muted-foreground">Pattern Problems</div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <Brain className="h-8 w-8 text-green-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">92%</div>
            <div className="text-sm text-muted-foreground">Placement Success Rate</div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <Users className="h-8 w-8 text-purple-600 mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">6-8 weeks</div>
            <div className="text-sm text-muted-foreground">Prep Timeline</div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>The Modern Tech Interview: What to Expect</h2>
          <p>
            Tech interviews in 2025 follow a predictable pattern across most companies. Understanding the structure helps you prepare efficiently:
          </p>

          <div className="not-prose space-y-4 my-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Round 1: Phone/Initial Screen (30-45 min)</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Resume walkthrough + 1-2 easy coding problems</li>
                <li>• Focus: Basic problem-solving, communication</li>
                <li>• Pass rate: ~40-50%</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Round 2-3: Technical Rounds (60-90 min each)</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 2-3 medium/hard coding problems OR system design</li>
                <li>• Focus: Algorithm proficiency, code quality, optimization</li>
                <li>• Pass rate: ~30-40% per round</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Round 4: Behavioral/Cultural Fit (45-60 min)</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• STAR method questions, team scenarios, values alignment</li>
                <li>• Focus: Communication, teamwork, growth mindset</li>
                <li>• Pass rate: ~70-80% (if you reached this stage)</li>
              </ul>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Final: Hiring Manager/Offer Discussion</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Team fit, role clarification, expectations</li>
                <li>• Offer negotiation typically happens here or after</li>
              </ul>
            </div>
          </div>

          <h2>Part 1: Mastering Coding Interviews</h2>
          
          <h3>The Pattern-Based Approach (Most Efficient)</h3>
          <p>
            Don't grind 500 random LeetCode problems. Master 15-20 patterns that cover 90% of interview questions. Here's the priority order:
          </p>

          <div className="not-prose bg-muted/30 rounded-xl p-6 my-6">
            <h4 className="font-bold mb-4">Essential Patterns (Must Master - 8 patterns)</h4>
            
            <div className="space-y-3 text-sm">
              <div className="border-b border-border pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold">1. Two Pointers</h5>
                  <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">20% of problems</span>
                </div>
                <p className="text-muted-foreground mb-2">For sorted arrays, strings, pairs/triplets finding.</p>
                <div className="text-xs">
                  <strong>Practice:</strong> Two Sum II, 3Sum, Container With Most Water (15 problems)
                </div>
              </div>

              <div className="border-b border-border pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold">2. Sliding Window</h5>
                  <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">15% of problems</span>
                </div>
                <p className="text-muted-foreground mb-2">Substring problems, max/min in subarrays.</p>
                <div className="text-xs">
                  <strong>Practice:</strong> Longest Substring Without Repeating, Max Sum Subarray (12 problems)
                </div>
              </div>

              <div className="border-b border-border pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold">3. Fast & Slow Pointers</h5>
                  <span className="text-xs bg-purple-500/10 text-purple-600 px-2 py-1 rounded">8% of problems</span>
                </div>
                <p className="text-muted-foreground mb-2">Linked list cycles, middle element finding.</p>
                <div className="text-xs">
                  <strong>Practice:</strong> Linked List Cycle, Happy Number (8 problems)
                </div>
              </div>

              <div className="border-b border-border pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold">4. Merge Intervals</h5>
                  <span className="text-xs bg-orange-500/10 text-orange-600 px-2 py-1 rounded">7% of problems</span>
                </div>
                <p className="text-muted-foreground mb-2">Overlapping intervals, scheduling problems.</p>
                <div className="text-xs">
                  <strong>Practice:</strong> Merge Intervals, Insert Interval (10 problems)
                </div>
              </div>

              <div className="border-b border-border pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold">5. In-place Reversal (Linked List)</h5>
                  <span className="text-xs bg-cyan-500/10 text-cyan-600 px-2 py-1 rounded">5% of problems</span>
                </div>
                <p className="text-muted-foreground mb-2">Reverse linked lists in various ways.</p>
                <div className="text-xs">
                  <strong>Practice:</strong> Reverse Linked List, Reverse Sublist (6 problems)
                </div>
              </div>

              <div className="border-b border-border pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold">6. Tree BFS/DFS</h5>
                  <span className="text-xs bg-pink-500/10 text-pink-600 px-2 py-1 rounded">18% of problems</span>
                </div>
                <p className="text-muted-foreground mb-2">Binary tree traversals, level-order, paths.</p>
                <div className="text-xs">
                  <strong>Practice:</strong> Level Order Traversal, Max Depth, Path Sum (20 problems)
                </div>
              </div>

              <div className="border-b border-border pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold">7. Binary Search</h5>
                  <span className="text-xs bg-indigo-500/10 text-indigo-600 px-2 py-1 rounded">12% of problems</span>
                </div>
                <p className="text-muted-foreground mb-2">Search in sorted arrays, rotated arrays, matrix.</p>
                <div className="text-xs">
                  <strong>Practice:</strong> Binary Search, Search Rotated Array (15 problems)
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold">8. Dynamic Programming (Basics)</h5>
                  <span className="text-xs bg-yellow-500/10 text-yellow-600 px-2 py-1 rounded">10% of problems</span>
                </div>
                <p className="text-muted-foreground mb-2">Fibonacci patterns, 0/1 Knapsack, LCS.</p>
                <div className="text-xs">
                  <strong>Practice:</strong> Climbing Stairs, House Robber, Longest Common Subsequence (18 problems)
                </div>
              </div>
            </div>
          </div>

          <h3>The 6-Week Coding Prep Plan</h3>
          <p>
            Follow this structured approach. Each week builds on the previous one:
          </p>

          <div className="not-prose space-y-3 my-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Week 1-2: Easy Problems (40 problems)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Focus: Build confidence, learn patterns, understand time/space complexity.
              </p>
              <div className="text-sm">
                <div><strong>Daily:</strong> 3-4 easy problems, review solutions even if you solve them</div>
                <div><strong>Topics:</strong> Arrays, strings, hash maps, two pointers</div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Week 3-4: Medium Problems (30 problems)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Focus: Apply patterns to harder problems, practice explaining your approach.
              </p>
              <div className="text-sm">
                <div><strong>Daily:</strong> 2-3 medium problems, 30-min time limit per problem</div>
                <div><strong>Topics:</strong> Trees, graphs, dynamic programming, backtracking</div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Week 5: Mixed Practice (20 problems)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Focus: Timed practice, identify weak areas, review mistakes.
              </p>
              <div className="text-sm">
                <div><strong>Daily:</strong> 3 problems (1 easy, 1-2 medium), mock interview practice</div>
                <div><strong>Strategy:</strong> Revisit problems you struggled with earlier</div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Week 6: Company-Specific & Mock Interviews</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Focus: Simulate real interviews, practice communication, optimize solutions.
              </p>
              <div className="text-sm">
                <div><strong>Daily:</strong> 1 company-tagged problem, 1 full mock interview</div>
                <div><strong>Resources:</strong> Pramp, Interviewing.io, or PraKMas mock sessions</div>
              </div>
            </div>
          </div>

          <h2>Part 2: System Design Interviews</h2>
          <p>
            For mid-senior roles (3+ years), system design is critical. Here's how to prepare:
          </p>

          <h3>The 5-Step Framework (Use in Every Interview)</h3>
          <div className="not-prose bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 my-6">
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                <div>
                  <strong>Requirements Clarification (5 min):</strong> Users, scale, features, constraints.<br/>
                  <em className="text-muted-foreground">Ask: "How many users?", "Read vs. write ratio?", "Latency requirements?"</em>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600 flex-shrink-0">2.</span>
                <div>
                  <strong>Capacity Estimation (5 min):</strong> Storage, bandwidth, cache size.<br/>
                  <em className="text-muted-foreground">Calculate: requests/second, storage needed, memory for cache</em>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">3.</span>
                <div>
                  <strong>High-Level Design (15 min):</strong> Draw architecture diagram.<br/>
                  <em className="text-muted-foreground">Components: Load balancer, app servers, database, cache, CDN</em>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange-600 flex-shrink-0">4.</span>
                <div>
                  <strong>Deep Dive (20 min):</strong> Database schema, API design, specific components.<br/>
                  <em className="text-muted-foreground">Interviewer will guide: "How would you handle...?"</em>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-pink-600 flex-shrink-0">5.</span>
                <div>
                  <strong>Bottlenecks & Scaling (10 min):</strong> Identify issues, propose solutions.<br/>
                  <em className="text-muted-foreground">Discuss: caching strategy, database replication, horizontal scaling</em>
                </div>
              </li>
            </ol>
          </div>

          <h3>Must-Know System Design Topics</h3>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Core Concepts</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>✓ Load Balancing (Round Robin, Least Connections)</li>
                <li>✓ Caching (Redis, Memcached, CDN)</li>
                <li>✓ Database Sharding & Replication</li>
                <li>✓ CAP Theorem basics</li>
                <li>✓ Consistent Hashing</li>
                <li>✓ Message Queues (SQS, Kafka)</li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Common Questions</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>→ Design URL Shortener (like bit.ly)</li>
                <li>→ Design Instagram/Twitter feed</li>
                <li>→ Design WhatsApp/Chat system</li>
                <li>→ Design YouTube/Netflix</li>
                <li>→ Design Uber/ride-sharing</li>
                <li>→ Design Web Crawler</li>
              </ul>
            </div>
          </div>

          <h2>Part 3: Behavioral Interviews (The Underrated Round)</h2>
          <p>
            30-40% of candidates fail here despite acing technical rounds. Master the STAR method:
          </p>

          <div className="not-prose bg-green-500/10 border border-green-500/20 rounded-xl p-6 my-6">
            <h4 className="font-bold mb-3">STAR Method Template</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-green-600">S - Situation:</strong> Set context (1-2 sentences)<br/>
                <em className="text-muted-foreground">"In my previous role at XYZ, we had a critical deadline for..."</em>
              </div>
              <div>
                <strong className="text-blue-600">T - Task:</strong> Your responsibility/challenge<br/>
                <em className="text-muted-foreground">"I was tasked with fixing a performance issue that..."</em>
              </div>
              <div>
                <strong className="text-purple-600">A - Action:</strong> What YOU did (most important, 60% of answer)<br/>
                <em className="text-muted-foreground">"I analyzed the bottleneck, implemented caching, refactored the query..."</em>
              </div>
              <div>
                <strong className="text-orange-600">R - Result:</strong> Quantifiable outcome + learning<br/>
                <em className="text-muted-foreground">"This reduced load time by 70%, and I learned the importance of..."</em>
              </div>
            </div>
          </div>

          <h3>Top 10 Behavioral Questions (Prepare Stories for These)</h3>
          <div className="not-prose space-y-2 my-6">
            <div className="text-sm bg-muted/30 p-3 rounded">1. Tell me about a time you faced a difficult challenge</div>
            <div className="text-sm bg-muted/30 p-3 rounded">2. Describe a conflict with a team member and how you resolved it</div>
            <div className="text-sm bg-muted/30 p-3 rounded">3. Tell me about a project you're most proud of</div>
            <div className="text-sm bg-muted/30 p-3 rounded">4. Describe a time you failed and what you learned</div>
            <div className="text-sm bg-muted/30 p-3 rounded">5. How do you handle tight deadlines and pressure?</div>
            <div className="text-sm bg-muted/30 p-3 rounded">6. Tell me about a time you had to learn a new technology quickly</div>
            <div className="text-sm bg-muted/30 p-3 rounded">7. Describe a situation where you disagreed with your manager</div>
            <div className="text-sm bg-muted/30 p-3 rounded">8. How do you prioritize when everything is urgent?</div>
            <div className="text-sm bg-muted/30 p-3 rounded">9. Tell me about a time you received critical feedback</div>
            <div className="text-sm bg-muted/30 p-3 rounded">10. Why do you want to work here? (research the company!)</div>
          </div>

          <h2>Interview Day: The Execution Checklist</h2>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Before the Interview</h4>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> <span>Test tech setup 15 min early (mic, camera, internet)</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> <span>Have paper/whiteboard ready for problem-solving</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> <span>Review company's recent news, products, values</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> <span>Prepare 3-5 questions to ask interviewer</span></li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-3">During the Interview</h4>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> <span>Think out loud - don't go silent for 2+ minutes</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> <span>Clarify requirements before coding</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> <span>Start with brute force, then optimize</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> <span>Test your solution with example cases</span></li>
              </ul>
            </div>
          </div>

          <h2>Common Mistakes That Cost Offers</h2>
          <div className="not-prose space-y-3 my-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-red-600">❌ Jumping to Code Immediately</h4>
              <p className="text-sm text-muted-foreground">
                Take 3-5 minutes to clarify, discuss approach, and get interviewer buy-in before coding. Shows thoughtfulness.
              </p>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-red-600">❌ Not Testing Your Code</h4>
              <p className="text-sm text-muted-foreground">
                Walk through 1-2 test cases manually. Finding bugs yourself is much better than interviewer finding them.
              </p>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-red-600">❌ Giving Up on Hints</h4>
              <p className="text-sm text-muted-foreground">
                Hints aren't failures - interviewers want to see how you collaborate. Say "That's a great hint, let me think..." then use it.
              </p>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-red-600">❌ Poor Communication</h4>
              <p className="text-sm text-muted-foreground">
                Mumbling, long silences, or interrupting are red flags. Practice explaining your thinking clearly and concisely.
              </p>
            </div>
          </div>

          <h2>Resources: Where to Practice</h2>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Coding Practice</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <strong>LeetCode:</strong> Best for pattern practice (Premium worth it)</li>
                <li>• <strong>NeetCode.io:</strong> 150 curated problems by pattern</li>
                <li>• <strong>AlgoExpert:</strong> Video explanations ($99, good value)</li>
                <li>• <strong>HackerRank:</strong> Good for company-specific prep</li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">System Design</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <strong>System Design Primer (GitHub):</strong> Free, comprehensive</li>
                <li>• <strong>Gaurav Sen (YouTube):</strong> Clear video explanations</li>
                <li>• <strong>Designing Data-Intensive Applications:</strong> Book (deep dive)</li>
                <li>• <strong>ByteByteGo:</strong> Visual system design ($39/yr)</li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Mock Interviews</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <strong>Pramp:</strong> Free peer mock interviews</li>
                <li>• <strong>Interviewing.io:</strong> Anonymous practice with engineers</li>
                <li>• <strong>PraKMas Mock Sessions:</strong> With industry mentors</li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Behavioral Prep</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <strong>Amazon Leadership Principles:</strong> Great framework</li>
                <li>• <strong>Glassdoor:</strong> Company-specific questions</li>
                <li>• <strong>Record yourself:</strong> Practice stories on camera</li>
              </ul>
            </div>
          </div>

          <h2>How PraKMas Prepares You for Success</h2>
          <p>
            Our 92% placement rate isn't luck - it's systematic preparation built into the training program:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Weekly Mock Interviews</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Starting month 3, every student does 1-2 mock interviews per week with industry professionals. Get real feedback, not automated tests.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Pattern-Based Curriculum</h4>
              <p className="text-sm text-muted-foreground mb-3">
                We teach the 15 core patterns, not 500 random problems. Students master fundamentals in weeks 1-4, then apply to company-specific problems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Dedicated Interview Prep Month</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Month 6 focuses entirely on interviews: system design workshops, behavioral practice, negotiation training, and live interview scheduling.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Real Interview Pipeline</h4>
              <p className="text-sm text-muted-foreground mb-3">
                We schedule your interviews strategically: "practice" companies first, target companies last. Placement team handles logistics, you focus on performing.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Ace Your Tech Interviews?</h2>
            <p className="text-muted-foreground mb-6">
              Join PraKMas's proven interview prep program. 800+ successful placements, 92% success rate, average ₹6.5L package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/training-internships">
                <Button size="lg" className="gap-2">
                  <Target className="h-5 w-5" />
                  View Training Program
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  <Briefcase className="h-5 w-5" />
                  Schedule Free Mock Interview
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