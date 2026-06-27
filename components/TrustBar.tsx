import { MessageCircle, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const trustItems = [
  { label: "正品来源", description: "下单前确认", icon: ShieldCheck, mobileHero: true },
  { label: "马来西亚现货", description: "Ready stock", icon: PackageCheck, mobileHero: true },
  { label: "安全包装", description: "防压保护", icon: Truck, mobileHero: false },
  { label: "快速回复", description: "WhatsApp客服", icon: MessageCircle, mobileHero: false },
];

export function TrustBar() {
  return (
    <section className="section-pad mt-2 pb-5 md:mt-3 md:pb-6" aria-label="购买保障">
      <div className="mx-auto grid w-full max-w-[1360px] grid-cols-2 gap-2 rounded-[20px] border border-white/12 bg-[#070b18]/70 p-2 shadow-[0_20px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl md:grid-cols-4">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={cn(
                "min-h-[60px] items-center gap-2 rounded-2xl border border-white/8 bg-white/[0.035] px-2 md:flex md:min-h-[62px] md:justify-center md:gap-3 md:px-3",
                item.mobileHero ? "flex" : "hidden",
              )}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-yellow-300/11 text-[var(--gold)] md:h-10 md:w-10">
                <Icon className="h-[18px] w-[18px] md:h-5 md:w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block whitespace-nowrap text-[13px] font-black leading-5 text-white/88 md:text-sm">
                  {item.label}
                </span>
                <span className="block whitespace-nowrap text-[11px] font-semibold leading-4 text-white/50">
                  {item.description}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
