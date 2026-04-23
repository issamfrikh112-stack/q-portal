import { r as reactExports, j as jsxRuntimeExports, L as Link, S as Skeleton } from "./index-DAfkbUJZ.js";
import { c as createLucideIcon, C as Card, a as CardContent } from "./createLucideIcon-B0pXK3lq.js";
import { u as useAnnouncements, I as Input } from "./useAnnouncements-Ctt5vPCd.js";
import { C as CATEGORIES } from "./categories-B83QnjBt.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function Home() {
  const [search, setSearch] = reactExports.useState("");
  const { data: announcements, isLoading } = useAnnouncements();
  const filteredCategories = CATEGORIES.filter(
    (c) => search === "" ? true : c.name.toLowerCase().includes(search.toLowerCase())
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "px-4 pt-4 pb-24 space-y-4 max-w-2xl mx-auto",
      "data-ocid": "home.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-ocid": "home.search_input", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "rounded-full pl-11 pr-5 h-12 bg-card border-border shadow-sm text-sm",
              placeholder: "Search services...",
              value: search,
              onChange: (e) => setSearch(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", "data-ocid": "home.categories.list", children: filteredCategories.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "col-span-3 text-center py-8 text-muted-foreground text-sm",
            "data-ocid": "home.categories.empty_state",
            children: "No categories match your search."
          }
        ) : filteredCategories.map((cat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/category/$name",
            params: { name: encodeURIComponent(cat.name) },
            "data-ocid": `home.categories.item.${idx + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl border-border shadow-sm hover:shadow-md transition-smooth cursor-pointer h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: cat.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-2 font-medium text-foreground", children: cat.name })
            ] }) })
          },
          cat.name
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "rounded-xl border-border shadow-sm",
            "data-ocid": "home.welcome.card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground", children: "Welcome to Q+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Your gateway to public services and information." })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "rounded-xl border-border shadow-sm",
            "data-ocid": "home.updates.card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-foreground mb-2", children: "Sample Updates" }),
              isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-ocid": "home.updates.loading_state", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full rounded" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6 rounded" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/6 rounded" })
              ] }) : !announcements || announcements.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm text-muted-foreground",
                  "data-ocid": "home.updates.empty_state",
                  children: "No updates at this time."
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "ul",
                {
                  className: "list-disc ml-5 space-y-1",
                  "data-ocid": "home.updates.list",
                  children: announcements.map((ann, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "text-sm text-muted-foreground",
                      "data-ocid": `home.updates.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: ann.title }),
                        ann.body && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: ann.body })
                      ]
                    },
                    String(ann.id)
                  ))
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
export {
  Home as default
};
