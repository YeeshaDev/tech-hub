"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"

const data = [
  {
    revenue: 400,
    date: "Jan 1",
  },
  {
    revenue: 300,
    date: "Jan 2",
  },
  {
    revenue: 500,
    date: "Jan 3",
  },
  {
    revenue: 200,
    date: "Jan 4",
  },
  {
    revenue: 600,
    date: "Jan 5",
  },
  {
    revenue: 400,
    date: "Jan 6",
  },
  {
    revenue: 300,
    date: "Jan 7",
  },
]

export function Overview() {
  const { theme: mode } = useTheme()

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Revenue
                      </span>
                      <span className="font-bold text-muted-foreground">
                        ${payload[0].value}
                      </span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "var(--theme-primary)", opacity: 0.8 },
          }}
          style={
            {
              stroke: "hsl(var(--primary))",
              opacity: 0.5,
              "--theme-primary": `hsl(var(--primary))`,
            } as React.CSSProperties
          }
        />
      </LineChart>
    </ResponsiveContainer>
  )
}