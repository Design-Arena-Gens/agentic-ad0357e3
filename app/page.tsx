import Image from "next/image";
import {
  cardDetails,
  type CardDetails,
} from "@/data/card";
import { SectionTitle } from "@/components/SectionTitle";
import { AwakeningStageCard } from "@/components/AwakeningStageCard";
import { StatTable } from "@/components/StatTable";
import { KiMultiplierList } from "@/components/KiMultiplierList";
import { SuperAttackCard } from "@/components/SuperAttackCard";
import { LinkGrid } from "@/components/LinkGrid";
import { CategoryGrid } from "@/components/CategoryGrid";
import { PartnerGrid } from "@/components/PartnerGrid";
import { FarmableList } from "@/components/FarmableList";

function Hero({ details }: { details: CardDetails }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-dokkan-dark/60 p-8 shadow-2xl">
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-dokkan-accent">
            Summonable LR • {details.type}
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              {details.title}
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {details.name}
            </h1>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-200">
            A comprehensive compendium of the Battle Against Limits Goku (Kaioken)
            card, compiling stats, awakenings, skills, and team synergies directly
            from Dokkan Wiki.
          </p>
          <dl className="flex flex-wrap gap-6 text-sm text-slate-200">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Team Cost
              </dt>
              <dd className="mt-1 text-xl font-semibold text-white">
                {details.teamCost}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Rarity
              </dt>
              <dd className="mt-1 flex items-center gap-2 text-xl font-semibold text-white">
                <Image
                  src={details.art.lrBadgeUrl}
                  alt="LR badge"
                  width={36}
                  height={36}
                />
                {details.rarity}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Reference
              </dt>
              <dd className="mt-1">
                <a
                  href={details.summonTypeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-dokkan-accent/20 px-3 py-1 text-dokkan-accent hover:bg-dokkan-accent/30 hover:text-white"
                >
                  View summon table
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 translate-y-8 scale-125 rounded-full bg-dokkan-accent/20 blur-3xl" />
          <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl bg-slate-950/70 p-6 shadow-lg shadow-black/60">
            <Image
              src={details.art.cardArtUrl}
              alt={`${details.name} card art`}
              fill
              className="object-contain"
              sizes="256px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const details = cardDetails;

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-12">
      <Hero details={details} />

      <section>
        <SectionTitle label="Awakening Path" subtitle="Every stage from SSR to EZA" />
        <div className="grid gap-5 lg:grid-cols-2">
          {details.awakenings.map((stage) => (
            <AwakeningStageCard key={`${stage.stage}-${stage.releaseDate}`} stage={stage} />
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionTitle label="Stats" subtitle="Base, max, and potential boost values" />
          <StatTable stats={details.stats} />
        </div>
        <div>
          <SectionTitle label="Ki Multipliers" subtitle="Scaling thresholds for damage" />
          <KiMultiplierList multipliers={details.kiMultipliers} />
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionTitle id="leader-skill" label="Leader Skill" />
          <p className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm leading-relaxed text-slate-200">
            {details.leaderSkill.description}
          </p>
        </div>
        <div className="space-y-6">
          <SectionTitle id="passive-skill" label="Passive Skill" subtitle={details.passiveSkill.name} />
          <article className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm leading-relaxed text-slate-200">
            <p className="text-dokkan-accent">{details.passiveSkill.condition}</p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Base Effects
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {details.passiveSkill.baseEffects.map((effect) => (
                  <li key={effect}>{effect}</li>
                ))}
              </ul>
            </div>
            {details.passiveSkill.timedEffects.length ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Timed Buffs
                </p>
                <ul className="mt-2 space-y-2">
                  {details.passiveSkill.timedEffects.map((item) => (
                    <li key={item.condition}>
                      <p className="font-semibold text-white">{item.condition}</p>
                      <ul className="list-disc space-y-1 pl-5">
                        {item.effects.map((effect) => (
                          <li key={effect}>{effect}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Conditional Effects
              </p>
              <ul className="mt-2 space-y-2">
                {details.passiveSkill.conditionalEffects.map((item) => (
                  <li key={item.condition}>
                    <p className="font-semibold text-white">{item.condition}</p>
                    <ul className="list-disc space-y-1 pl-5">
                      {item.effects.map((effect) => (
                        <li key={effect}>{effect}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            {details.passiveSkill.animations.length ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Animations
                </p>
                <ul className="mt-2 space-y-1 text-dokkan-accent">
                  {details.passiveSkill.animations.map((animation) => (
                    <li key={animation.url}>
                      <a
                        href={animation.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white"
                      >
                        {animation.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionTitle id="active-skill" label="Active Skill" subtitle={details.activeSkill.name} />
          <article className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm leading-relaxed text-slate-200">
            <p className="text-dokkan-accent">{details.activeSkill.condition}</p>
            <ul className="list-disc space-y-1 pl-5">
              {details.activeSkill.effects.map((effect) => (
                <li key={effect}>{effect}</li>
              ))}
            </ul>
            {details.activeSkill.animations.length ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Animation
                </p>
                <ul className="mt-2 space-y-1 text-dokkan-accent">
                  {details.activeSkill.animations.map((animation) => (
                    <li key={animation.url}>
                      <a
                        href={animation.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white"
                      >
                        {animation.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        </div>
        <div className="space-y-6">
          <SectionTitle id="super-attacks" label="Super Attacks" subtitle="Mega-colossal finishers" />
          <div className="space-y-5">
            {details.superAttacks.map((attack) => (
              <SuperAttackCard key={attack.name} attack={attack} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionTitle id="links" label="Link Skills" subtitle="Max level link roster" />
        <LinkGrid links={details.links} />
      </section>

      <section>
        <SectionTitle
          id="categories"
          label="Categories"
          subtitle="Teams and archetypes this unit can slot into"
        />
        <CategoryGrid categories={details.categories} />
      </section>

      <section>
        <SectionTitle
          id="partners"
          label="Top Linking Partners"
          subtitle="Shared link count and team overlap"
        />
        <PartnerGrid partners={details.partners} />
      </section>

      <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <SectionTitle id="sa_level_ups" label="Raise Super Attack" />
          <FarmableList options={details.farmableSuperAttacks} />
        </div>
        <div className="space-y-6">
          <SectionTitle id="sprites" label="Sprites" />
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-200">
            {details.sprites.status}
          </div>
        </div>
      </section>
    </main>
  );
}
