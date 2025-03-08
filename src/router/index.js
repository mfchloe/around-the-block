import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SkillSharingView from "@/views/SkillSharingView.vue";
import SkillPostingView from "@/views/SkillPostingView.vue";
import InboxView from "@/views/InboxView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/skills-sharing",
    name: "SkillsSharing",
    component: SkillSharingView,
  },
  { path: "/skill-posting", name: "SkillPosting", component: SkillPostingView },
  { path: "/inbox", name: "Inbox", component: InboxView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
