import { j as jsxRuntimeExports, L as Link } from "./index-DAfkbUJZ.js";
import { B as Badge } from "./badge-DfCFC7dN.js";
import { c as createLucideIcon, C as Card, a as CardContent } from "./createLucideIcon-B0pXK3lq.js";
import { C as CATEGORIES } from "./categories-B83QnjBt.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode);
const COMING_SOON_SERVICES = [
  {
    icon: "🏛️",
    name: "Civil Registry",
    description: "Birth, marriage & death certificates online"
  },
  {
    icon: "🚗",
    name: "Vehicle Registration",
    description: "Register or renew vehicle licenses"
  },
  {
    icon: "🌐",
    name: "Digital ID",
    description: "Apply for a national digital identity card"
  },
  {
    icon: "🏗️",
    name: "Building Permits",
    description: "Submit & track construction applications"
  },
  {
    icon: "💊",
    name: "Health Benefits",
    description: "Access public healthcare entitlements"
  },
  {
    icon: "📊",
    name: "Business Licensing",
    description: "Register and manage business permits"
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "px-4 pt-5 max-w-2xl mx-auto space-y-6 pb-6",
      "data-ocid": "services.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-foreground", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Government services portal — your gateway to official departments" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "services.active.section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3", children: "Available Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "services.active.list", children: CATEGORIES.map((cat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/category/$name",
              params: { name: encodeURIComponent(cat.name) },
              "data-ocid": `services.active.item.${idx + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl border-border shadow-sm hover:shadow-md transition-smooth cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl w-9 text-center shrink-0", children: cat.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground", children: cat.name }),
                  cat.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: cat.description })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs shrink-0", children: "Active" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-muted-foreground shrink-0" })
              ] }) })
            },
            cat.name
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "services.coming_soon.section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-muted-foreground uppercase tracking-wide", children: "Coming Soon" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: "text-xs border-primary/40 text-primary gap-1 flex items-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                  "Launching Soon"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "rounded-xl border-border shadow-sm mb-3",
              "data-ocid": "services.coming_soon.card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
                "We're expanding the Q+ portal with new digital services.",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Stay tuned" }),
                " — these features are currently under development and will be available soon."
              ] }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-2 gap-3",
              "data-ocid": "services.coming_soon.list",
              children: COMING_SOON_SERVICES.map((svc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Card,
                {
                  className: "rounded-xl border-border shadow-sm opacity-70 cursor-not-allowed",
                  "data-ocid": `services.coming_soon.item.${idx + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl leading-none", children: svc.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-[10px] border-muted-foreground/30 text-muted-foreground shrink-0",
                          children: "Soon"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground leading-tight", children: svc.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-snug line-clamp-2", children: svc.description })
                  ] })
                },
                svc.name
              ))
            }
          )
        ] })
      ]
    }
  );
}
export {
  Services as default
};
