
import DashboardLayout from "../layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ClipboardList,
  CheckCircle2,
  Trophy,
  Clock,
  Plus,
  ArrowUpRight,
  Atom,
  FlaskConical,
  Calculator,
  Code2,
  MoreVertical,
  FileText,
  Users,
  BookmarkCheck,
  MessageCircle,
  BarChart3,
  Star,
  UserPlus,
  Search,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";



const perfData = [
  { d: "Mon", v: 45 },
  { d: "Tue", v: 52 },
  { d: "Wed", v: 68 },
  { d: "Thu", v: 75 },
  { d: "Fri", v: 64 },
  { d: "Sat", v: 58 },
  { d: "Sun", v: 72 },
];
const subjectData = [
  { name: "Mathematics", value: 82, color: "oklch(0.55 0.22 280)" },
  { name: "Physics", value: 74, color: "oklch(0.7 0.17 155)" },
  { name: "Chemistry", value: 68, color: "oklch(0.8 0.16 75)" },
  { name: "English", value: 85, color: "oklch(0.7 0.13 230)" },
  { name: "Computer", value: 90, color: "oklch(0.7 0.2 0)" },
];
const stats = [
  {
    label: "Tests Attempted",
    value: "24",
    delta: "12 this week",
    icon: ClipboardList,
    tint: "bg-primary/10 text-primary",
  },
  {
    label: "Average Score",
    value: "78%",
    delta: "8% this week",
    icon: CheckCircle2,
    tint: "bg-success/15 text-success",
  },
  {
    label: "Global Rank",
    value: "#12",
    delta: "Top 5% of users",
    icon: Trophy,
    tint: "bg-warning/20 text-warning-foreground",
  },
  {
    label: "Study Time",
    value: "18h 32m",
    delta: "4h this week",
    icon: Clock,
    tint: "bg-info/15 text-info",
  },
];
const recentTests = [
  {
    title: "React MCQ Test",
    cat: "Computer Science",
    score: "78%",
    date: "2 May 2024",
    icon: Atom,
    tint: "bg-info/15 text-info",
  },
  {
    title: "Physics Chapter 1",
    cat: "Physics",
    score: "65%",
    date: "1 May 2024",
    icon: FlaskConical,
    tint: "bg-primary/10 text-primary",
  },
  {
    title: "Math Quiz - Algebra",
    cat: "Mathematics",
    score: "90%",
    date: "30 Apr 2024",
    icon: Calculator,
    tint: "bg-success/15 text-success",
  },
  {
    title: "Chemistry Basics",
    cat: "Chemistry",
    score: "72%",
    date: "29 Apr 2024",
    icon: Code2,
    tint: "bg-pink/15 text-pink",
  },
];
const notifications = [
  {
    icon: CheckCircle2,
    tint: "bg-success/15 text-success",
    title: "Your test React Basics MCQ has been approved",
    time: "2 min ago",
  },
  {
    icon: FileText,
    tint: "bg-info/15 text-info",
    title: "New test available: JavaScript Advanced MCQ",
    time: "15 min ago",
  },
  {
    icon: BarChart3,
    tint: "bg-primary/10 text-primary",
    title: "You scored 80% in Math Quiz",
    time: "1 hour ago",
  },
  {
    icon: MessageCircle,
    tint: "bg-pink/15 text-pink",
    title: "Admin replied to your question",
    time: "3 hours ago",
  },
  {
    icon: Trophy,
    tint: "bg-warning/20 text-warning-foreground",
    title: "You ranked #12 this week",
    time: "5 hours ago",
  },
];
const activity = [
  { icon: Atom, title: "You completed React MCQ Test", time: "2 min ago" },
  {
    icon: BookmarkCheck,
    title: "You bookmarked JavaScript Quiz",
    time: "1 hour ago",
  },
  {
    icon: MessageCircle,
    title: "Your question has been answered",
    time: "3 hours ago",
  },
  {
    icon: BarChart3,
    title: "New weekly leaderboard published",
    time: "5 hours ago",
  },
  { icon: Users, title: "You joined team Code Warriors", time: "1 day ago" },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid xl:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-6 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome back, Ali! 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Let's continue your learning journey today.
              </p>
            </div>
            <Button size="lg" className="gap-2">
              <Plus className="size-4" /> Create Test
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <Card key={s.label}>
                <CardContent className="p-5">
                  <div
                    className={`size-12 rounded-xl grid place-items-center mb-4 ${s.tint}`}
                  >
                    <s.icon className="size-5" />
                  </div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                  <div className="text-3xl font-bold mt-1">{s.value}</div>
                  <div className="text-xs text-success mt-2 flex items-center gap-1">
                    <ArrowUpRight className="size-3" /> {s.delta}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">
                  Performance Overview
                </CardTitle>
                <select className="text-sm border rounded-md px-3 py-1.5 bg-card">
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer>
                    <LineChart data={perfData}>
                      <defs>
                        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor="oklch(0.55 0.22 280)"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="100%"
                            stopColor="oklch(0.55 0.22 280)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="oklch(0.92 0.01 270)"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="d"
                        stroke="oklch(0.5 0.03 265)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="oklch(0.5 0.03 265)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(v) => `${v}%`}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: 8,
                          border: "1px solid oklch(0.92 0.01 270)",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="v"
                        stroke="oklch(0.55 0.22 280)"
                        strokeWidth={2.5}
                        dot={{ r: 4, fill: "oklch(0.55 0.22 280)" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Subject Wise Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <div className="relative size-44 shrink-0">
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={subjectData}
                          dataKey="value"
                          innerRadius={55}
                          outerRadius={80}
                          paddingAngle={2}
                        >
                          {subjectData.map((s, i) => (
                            <Cell key={i} fill={s.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 grid place-items-center text-center pointer-events-none">
                      <div>
                        <div className="text-2xl font-bold">78%</div>
                        <div className="text-xs text-muted-foreground">
                          Overall
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2.5">
                    {subjectData.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span
                          className="size-2.5 rounded-full"
                          style={{ backgroundColor: s.color }}
                        />
                        <span className="flex-1">{s.name}</span>
                        <span className="font-semibold">{s.value}%</span>
                      </div>
                    ))}
                    <button className="text-primary text-sm font-medium pt-1">
                      View All
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">Recent Tests</CardTitle>
                <button className="text-primary text-sm font-medium">
                  View All
                </button>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead className="text-muted-foreground text-xs">
                    <tr className="border-b">
                      <th className="text-left font-medium px-6 py-3">
                        Test Title
                      </th>
                      <th className="text-left font-medium py-3">Category</th>
                      <th className="text-left font-medium py-3">Score</th>
                      <th className="text-left font-medium py-3">Status</th>
                      <th className="text-left font-medium py-3">Date</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {recentTests.map((t) => (
                      <tr
                        key={t.title}
                        className="border-b last:border-0 hover:bg-muted/40"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`size-9 rounded-lg grid place-items-center ${t.tint}`}
                            >
                              <t.icon className="size-4" />
                            </div>
                            <span className="font-medium">{t.title}</span>
                          </div>
                        </td>
                        <td className="text-muted-foreground">{t.cat}</td>
                        <td className="font-semibold">{t.score}</td>
                        <td>
                          <Badge className="bg-success/15 text-success hover:bg-success/15 border-0">
                            Completed
                          </Badge>
                        </td>
                        <td className="text-muted-foreground">{t.date}</td>
                        <td className="pr-4">
                          <MoreVertical className="size-4 text-muted-foreground" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      label: "Create Test",
                      icon: Plus,
                      tint: "bg-primary/10 text-primary",
                    },
                    {
                      label: "Join Test",
                      icon: UserPlus,
                      tint: "bg-success/15 text-success",
                    },
                    {
                      label: "Explore Tests",
                      icon: Search,
                      tint: "bg-info/15 text-info",
                    },
                    {
                      label: "My Results",
                      icon: BarChart3,
                      tint: "bg-warning/20 text-warning-foreground",
                    },
                  ].map((a) => (
                    <button
                      key={a.label}
                      className="aspect-square rounded-xl border hover:border-primary/40 hover:bg-muted/40 flex flex-col items-center justify-center gap-2 transition"
                    >
                      <div
                        className={`size-11 rounded-full grid place-items-center ${a.tint}`}
                      >
                        <a.icon className="size-5" />
                      </div>
                      <span className="text-sm font-medium">{a.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-linear-to-r from-primary to-violet-500 text-primary-foreground border-0">
            <CardContent className="flex flex-wrap items-center gap-4 p-5">
              <div className="size-11 rounded-full bg-white/20 grid place-items-center">
                <Star className="size-5" />
              </div>
              <div className="flex-1 min-w-50">
                <div className="font-semibold">
                  Keep it up! You are doing great! 🔥
                </div>
                <div className="text-sm opacity-90">
                  Your performance improved by 12% this week.
                </div>
              </div>
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Notifications</CardTitle>
              <button className="text-primary text-sm font-medium">
                View All
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((n, i) => (
                <div key={i} className="flex gap-3">
                  <div
                    className={`size-9 rounded-lg grid place-items-center shrink-0 ${n.tint}`}
                  >
                    <n.icon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm leading-snug">{n.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {n.time}
                    </div>
                  </div>
                  <MoreVertical className="size-4 text-muted-foreground shrink-0" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Activity Feed</CardTitle>
              <button className="text-primary text-sm font-medium">
                View All
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              {activity.map((a, i) => (
                <div key={i} className="flex gap-3">
                  <div className="size-9 rounded-lg bg-muted grid place-items-center shrink-0 text-muted-foreground">
                    <a.icon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm leading-snug">{a.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {a.time}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </DashboardLayout>
  );
}
