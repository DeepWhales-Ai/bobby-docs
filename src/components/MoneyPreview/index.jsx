import React from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import './styles.css';

// Money page, rendered at the public /projects route. Every package and surface
// is buyable via the standard DM Bobby path. Network size numbers are stripped.

export default function MoneyPreview() {
  return (
    <HtmlClassNameProvider className="proj-page">
    <div className="bmp">

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">For projects</div>
          <h1>Advertise where crypto actually pays attention.</h1>
          <p className="sub">Bobby lives inside the rooms where tokens get bought. Every placement is exclusive. One sponsor at a time. That is why it works.</p>
          <a className="cta-primary" href="https://t.me/BobbyBuyBot">DM Bobby</a>
        </div>
      </section>

      {/* PACKAGES */}
      <section>
        <div className="wrap">
          <div className="eyebrow">Packages</div>
          <h2>Five ways in. Each one samples the next weight class up.</h2>

          <div className="packs">
            {/* IGNITE */}
            <div className="pack" id="ignite">
              <div className="pname">Ignite</div>
              <div className="separate"><s>$250</s> bought separately</div>
              <div className="pprice">$199</div>
              <div className="psave">Save $51 vs buying separately</div>
              <div className="pitems">
                <div className="pit"><span>1 day exclusive buy alert banner</span><span className="pw">network wide</span></div>
                <div className="pit"><span>1 day booster spotlight</span><span className="pw">daily ritual post</span></div>
              </div>
              <div className="pimp"><div className="t">Combined footprint</div><div className="v">network wide reach + the daily ritual</div></div>
              <a className="cta-primary" href="https://t.me/BobbyBuyBot">DM Bobby</a>
            </div>

            {/* MOMENTUM */}
            <div className="pack center" id="momentum">
              <div className="badge">MOST POPULAR</div>
              <div className="pname">Momentum</div>
              <div className="separate"><s>$950</s> bought separately</div>
              <div className="pprice">$649</div>
              <div className="psave">Save $301 vs buying separately</div>
              <div className="pitems">
                <div className="pit"><span>3 day exclusive banner</span><span className="pw">network wide</span></div>
                <div className="pit"><span>3 booster spotlight days</span><span className="pw">3 ritual posts</span></div>
                <div className="pit"><span>1 direct message blast</span><span className="pw">the opted in inbox</span></div>
              </div>
              <div className="pimp"><div className="t">Combined footprint</div><div className="v">network wide reach + full inbox creative</div></div>
              <a className="cta-primary" href="https://t.me/BobbyBuyBot">DM Bobby</a>
            </div>

            {/* TAKEOVER */}
            <div className="pack" id="takeover">
              <div className="pname">Takeover</div>
              <div className="separate"><s>$2,900</s> bought separately</div>
              <div className="pprice">$1,749</div>
              <div className="psave">Save $1,151 vs buying separately</div>
              <div className="pitems">
                <div className="pit"><span>7 day exclusive banner</span><span className="pw">network wide</span></div>
                <div className="pit"><span>7 booster spotlight days</span><span className="pw">full week ritual</span></div>
                <div className="pit"><span>1 week community broadcast credit</span><span className="pw">2x daily · every group</span></div>
                <div className="pit"><span>1 blast + league weekly credit</span><span className="pw">inbox + the big event</span></div>
              </div>
              <div className="pimp"><div className="t">Combined footprint</div><div className="v">network wide reach + Bobby's voice, all week</div></div>
              <a className="cta-primary" href="https://t.me/BobbyBuyBot">DM Bobby</a>
            </div>

            {/* RESIDENCY */}
            <div className="pack" id="residency">
              <div className="pname">RESIDENCY</div>
              <div className="pdur">14 days</div>
              <div className="separate"><s>$6,100</s> bought separately</div>
              <div className="pprice">$3,499</div>
              <div className="psave">Save $2,601 vs buying separately</div>
              <div className="ptease">Two weeks living in every surface the network reads.</div>
              <div className="pitems">
                <div className="pit"><span>Banner · 2 weeks</span><span className="pw">$900</span></div>
                <div className="pit"><span>Daily booster · 14 days</span><span className="pw">$2,100</span></div>
                <div className="pit"><span>Group broadcast · 2 weeks</span><span className="pw">$2,000</span></div>
                <div className="pit"><span>Blasts · 2</span><span className="pw">$500</span></div>
                <div className="pit"><span>League placements · 2</span><span className="pw">$300</span></div>
                <div className="pit"><span>Weekly promos · 2</span><span className="pw">$300</span></div>
              </div>
              <a className="cta-primary" href="https://t.me/BobbyBuyBot">DM Bobby</a>
            </div>

            {/* REIGN */}
            <div className="pack" id="reign">
              <div className="pname">REIGN</div>
              <div className="pdur">30 days</div>
              <div className="separate"><s>$12,350</s> bought separately</div>
              <div className="pprice">$6,499</div>
              <div className="psave">Save $5,851 vs buying separately</div>
              <div className="ptease">Thirty days. The network stops asking who you are.</div>
              <div className="pitems">
                <div className="pit"><span>Banner · 4 weeks</span><span className="pw">$1,800</span></div>
                <div className="pit"><span>Daily booster · 30 days</span><span className="pw">$4,500</span></div>
                <div className="pit"><span>Group broadcast · 4 weeks</span><span className="pw">$4,000</span></div>
                <div className="pit"><span>Blasts · 4</span><span className="pw">$1,000</span></div>
                <div className="pit"><span>League · 3 pack plus 1</span><span className="pw">$525</span></div>
                <div className="pit"><span>Promo · 3 pack plus 1</span><span className="pw">$525</span></div>
              </div>
              <a className="cta-primary" href="https://t.me/BobbyBuyBot">DM Bobby</a>
            </div>
          </div>

          {/* Board add on strip */}
          <div className="boardstrip">
            <div className="t">Add The Board · from $67.50</div>
            <div className="bsupport">Stacks on any package.</div>
            <a href="https://t.me/BobbyBuyBot"><span>Get a slot</span></a>
          </div>

          <div className="partner">
            <div className="t">Partner · standing presence, custom scope</div>
            <a href="https://t.me/BobbyBuyBot">Talk to Bobby →</a>
          </div>
        </div>
      </section>

      {/* SURFACE POWER */}
      <section>
        <div className="wrap">
          <div className="eyebrow">Build your own</div>
          <h2>Every surface, its power, its price.</h2>
          <p className="sub">Four weight classes. Reach puts you everywhere. Presence keeps you in the room. Moments put you on the posts everyone reads. Intent lands in one person's inbox.</p>

          <table>
            <thead><tr><th>Surface</th><th>Class</th><th>Power</th><th>Price</th></tr></thead>
            <tbody>
              <tr>
                <td><div className="sn">Buy alert banner</div><div className="sd">Your line and button at the foot of every live buy alert, network wide.</div></td>
                <td><span className="classlab reach">Reach</span></td>
                <td className="pow">Every live alert<small>network wide</small></td>
                <td className="prc">$100 day · $250 3 days · $450 week</td>
              </tr>
              <tr>
                <td><div className="sn">Community broadcast credit</div><div className="sd">Bobby's twice daily message to every group carries your credit line.</div></td>
                <td><span className="classlab presence">Presence</span></td>
                <td className="pow">Every group, twice daily<small>network wide cadence</small></td>
                <td className="prc">$200 day · $1,000 week</td>
              </tr>
              <tr>
                <td><div className="sn">The Board placements</div><div className="sd">A paid position on the board itself. Position is the price.</div></td>
                <td><span className="classlab presence">Presence</span></td>
                <td className="pow">24/7 for the slot<small>every board pull, every group</small></td>
                <td className="prc">from $67.50</td>
              </tr>
              <tr>
                <td><div className="sn">Daily booster spotlight</div><div className="sd">One credit line on the day's top boosters post. Bobby's copy stays Bobby's.</div></td>
                <td><span className="classlab moment">Moment</span></td>
                <td className="pow">The daily ritual<small>highest read organic post</small></td>
                <td className="prc">$150 day</td>
              </tr>
              <tr>
                <td><div className="sn">League weekly credit</div><div className="sd">Your name on the week's biggest event. The announcement stays organic.</div></td>
                <td><span className="classlab moment">Moment</span></td>
                <td className="pow">The week's main event<small>network wide reset post</small></td>
                <td className="prc">$150 · $375 x3</td>
              </tr>
              <tr>
                <td><div className="sn">Weekly promo post</div><div className="sd">A scheduled standalone post inside groups where Bobby is live.</div></td>
                <td><span className="classlab moment">Moment</span></td>
                <td className="pow">Your post, in network<small>single or a run of three</small></td>
                <td className="prc">$150 · $375 x3</td>
              </tr>
              <tr>
                <td><div className="sn">Direct message blast</div><div className="sd">Full creative, image included, sent once to the opted in audience.</div></td>
                <td><span className="classlab intent">Intent</span></td>
                <td className="pow">The opted in inbox<small>you own the whole message</small></td>
                <td className="prc">$250 per send</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* HOW */}
      <section>
        <div className="wrap">
          <div className="eyebrow">How it works</div>
          <div className="how">
            <div className="step"><div className="k">01</div><div className="t">DM Bobby and say advertise</div><div className="d">No forms. No sales calls. Bobby handles it in chat.</div></div>
            <div className="step"><div className="k">02</div><div className="t">Pick and pay in chat</div><div className="d">Choose a package or build your own. Pay right there.</div></div>
            <div className="step"><div className="k">03</div><div className="t">Bobby schedules it and sends proof</div><div className="d">You get confirmation when it runs. Receipts, not promises.</div></div>
          </div>

          <div className="trust">
            <div className="ti"><b>Every placement is marked.</b> A visible Sponsored marker on every surface, every time.</div>
            <div className="ti"><b>Bobby's own words are never for sale.</b> His calls, milestones and welcomes stay his.</div>
            <div className="ti"><b>Editorial is a separate door.</b> Bobby Recommends requires qualification. Money cannot skip it.</div>
          </div>
        </div>
      </section>

      <footer>
        <a className="cta-primary" href="https://t.me/BobbyBuyBot">DM Bobby</a>
      </footer>

    </div>
    </HtmlClassNameProvider>
  );
}
