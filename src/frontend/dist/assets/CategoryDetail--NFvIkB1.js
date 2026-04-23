import { a6 as useParams, a7 as useNavigate, j as jsxRuntimeExports } from "./index-DAfkbUJZ.js";
import { B as Badge } from "./badge-DfCFC7dN.js";
import { B as Button } from "./button-YQvlRtfv.js";
import { c as createLucideIcon, C as Card, a as CardContent } from "./createLucideIcon-B0pXK3lq.js";
import { C as CATEGORIES } from "./categories-B83QnjBt.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
];
const SearchX = createLucideIcon("search-x", __iconNode);
function CategoryDetail() {
  const { name } = useParams({ from: "/category/$name" });
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(name);
  const category = CATEGORIES.find(
    (c) => c.name.toLowerCase() === decodedName.toLowerCase()
  );
  const handleBack = () => {
    navigate({ to: "/" });
  };
  if (!category) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-[80vh] bg-background flex flex-col items-center justify-center p-6",
        "data-ocid": "category_detail.not_found.page",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-sm rounded-2xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 flex flex-col items-center text-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SearchX,
            {
              className: "w-8 h-8 text-muted-foreground",
              "aria-hidden": "true"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Category Not Found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
              "“",
              decodedName,
              "” is not a recognised category."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "category_detail.back_button",
              variant: "outline",
              className: "w-full mt-2 transition-smooth",
              onClick: handleBack,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
                "Back to Home"
              ]
            }
          )
        ] }) })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-[80vh] bg-background flex flex-col items-center justify-center p-6",
      "data-ocid": "category_detail.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-sm mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "category_detail.back_button",
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground transition-smooth -ml-2",
            onClick: handleBack,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-1.5" }),
              "Back"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            "data-ocid": "category_detail.card",
            className: "w-full max-w-sm rounded-2xl shadow-md",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 flex flex-col items-center text-center gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "data-ocid": "category_detail.icon",
                  className: "text-5xl leading-none select-none",
                  "aria-hidden": "true",
                  children: category.icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  "data-ocid": "category_detail.heading",
                  className: "text-2xl font-semibold tracking-tight text-foreground",
                  children: category.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  "data-ocid": "category_detail.badge",
                  variant: "secondary",
                  className: "px-3 py-1 text-xs font-medium uppercase tracking-wider",
                  children: "Coming Soon"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  "data-ocid": "category_detail.description",
                  className: "text-sm text-muted-foreground leading-relaxed",
                  children: [
                    "We are building out the",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: category.name }),
                    " ",
                    "section. Check back soon!"
                  ]
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
  CategoryDetail as default
};
