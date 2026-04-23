import { j as jsxRuntimeExports, c as cn, u as useInternetIdentity, r as reactExports, S as Skeleton } from "./index-DAfkbUJZ.js";
import { B as Badge } from "./badge-DfCFC7dN.js";
import { B as Button } from "./button-YQvlRtfv.js";
import { c as createLucideIcon, C as Card, a as CardContent, b as CardHeader } from "./createLucideIcon-B0pXK3lq.js";
import { u as useAnnouncements, a as useAddAnnouncement, b as useDeleteAnnouncement, I as Input } from "./useAnnouncements-Ctt5vPCd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
function Profile() {
  const { identity, login, clear, loginStatus } = useInternetIdentity();
  const isLoggedIn = !!identity;
  const principal = identity == null ? void 0 : identity.getPrincipal().toText();
  const [title, setTitle] = reactExports.useState("");
  const [body, setBody] = reactExports.useState("");
  const { data: announcements, isLoading: announcementsLoading } = useAnnouncements();
  const addAnnouncement = useAddAnnouncement();
  const deleteAnnouncement = useDeleteAnnouncement();
  async function handleAdd() {
    if (!title.trim() || !body.trim()) return;
    await addAnnouncement.mutateAsync({
      title: title.trim(),
      body: body.trim()
    });
    setTitle("");
    setBody("");
  }
  if (!isLoggedIn) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[70vh] px-6",
        "data-ocid": "profile.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-5 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-8 h-8 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-1", children: "Sign in to continue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6 text-center max-w-xs", children: "Use Internet Identity to access your profile and manage announcements." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => login(),
              disabled: loginStatus === "logging-in",
              className: "rounded-full px-8 gap-2",
              "data-ocid": "profile.login_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-4 h-4" }),
                loginStatus === "logging-in" ? "Signing in…" : "Sign in with Internet Identity"
              ]
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 max-w-2xl mx-auto pb-24", "data-ocid": "profile.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: "rounded-xl border-border shadow-sm mb-5",
        "data-ocid": "profile.identity.card",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-sm", children: "Signed in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-muted-foreground font-mono truncate mt-0.5",
                "data-ocid": "profile.principal_text",
                children: principal
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => clear(),
              className: "rounded-full gap-1.5 shrink-0",
              "data-ocid": "profile.signout_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-3.5 h-3.5" }),
                "Sign Out"
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 px-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "w-4 h-4 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base text-foreground", children: "Admin Panel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs ml-auto", children: "Announcements" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "rounded-xl border-border shadow-sm mb-4",
        "data-ocid": "profile.add_announcement.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground", children: "New Announcement" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "announcement-title",
                  className: "text-xs font-medium text-foreground",
                  children: "Title"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "announcement-title",
                  placeholder: "Enter announcement title",
                  value: title,
                  onChange: (e) => setTitle(e.target.value),
                  className: "rounded-lg",
                  "data-ocid": "profile.announcement_title.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "announcement-body",
                  className: "text-xs font-medium text-foreground",
                  children: "Description"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "announcement-body",
                  placeholder: "Enter announcement description",
                  value: body,
                  onChange: (e) => setBody(e.target.value),
                  className: "rounded-lg resize-none",
                  rows: 3,
                  "data-ocid": "profile.announcement_body.textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: handleAdd,
                disabled: !title.trim() || !body.trim() || addAnnouncement.isPending,
                className: "w-full rounded-lg gap-2",
                "data-ocid": "profile.add_announcement.submit_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                  addAnnouncement.isPending ? "Adding…" : "Add Announcement"
                ]
              }
            ),
            addAnnouncement.isError && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-destructive",
                "data-ocid": "profile.add_announcement.error_state",
                children: "Failed to add announcement. Please try again."
              }
            ),
            addAnnouncement.isSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-primary",
                "data-ocid": "profile.add_announcement.success_state",
                children: "Announcement added successfully."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "profile.announcements.list", children: announcementsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/5 rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-4/5 rounded" })
    ] }) }, i)) }) : announcements && announcements.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: announcements.map((ann, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: "rounded-xl border-border shadow-sm",
        "data-ocid": `profile.announcement.item.${idx + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground truncate", children: ann.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2 break-words", children: ann.body })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "shrink-0 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-lg",
              onClick: () => deleteAnnouncement.mutate(ann.id),
              disabled: deleteAnnouncement.isPending,
              "aria-label": `Delete announcement: ${ann.title}`,
              "data-ocid": `profile.announcement.delete_button.${idx + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
            }
          )
        ] })
      },
      String(ann.id)
    )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: "rounded-xl border-border shadow-sm",
        "data-ocid": "profile.announcements.empty_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "w-8 h-8 text-muted-foreground mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground", children: "No announcements yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Use the form above to add your first announcement." })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-6", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with love using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline",
          children: "caffeine.ai"
        }
      )
    ] })
  ] });
}
export {
  Profile as default
};
