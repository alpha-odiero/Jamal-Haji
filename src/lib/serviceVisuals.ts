import { Palette, PenTool, Layout, Share2, Megaphone, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ServiceVisual {
  icon: LucideIcon
  chipClass: string
  iconClass: string
}

/**
 * Icons rendered with a soft tinted chip and a matching icon color,
 * giving each service a distinctive, recognisable visual.
 */
export const serviceVisuals: ServiceVisual[] = [
  { icon: Palette, chipClass: 'bg-violet-100', iconClass: 'text-violet-600' },
  { icon: PenTool, chipClass: 'bg-amber-100', iconClass: 'text-amber-600' },
  { icon: Layout, chipClass: 'bg-rose-100', iconClass: 'text-rose-600' },
  { icon: Share2, chipClass: 'bg-sky-100', iconClass: 'text-sky-600' },
  { icon: Megaphone, chipClass: 'bg-emerald-100', iconClass: 'text-emerald-600' },
  { icon: Sparkles, chipClass: 'bg-fuchsia-100', iconClass: 'text-fuchsia-600' },
]