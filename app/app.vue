<script setup lang="ts">
import type { NavigationMenuItem, FooterColumn } from '@nuxt/ui'

const route = useRoute();

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ja'
  }
})

const title = route.meta.title as string ?? route.path
const description = 'ScJPマイクラ鯖は、設備やルールなどが充実した、愉快でフレンドリーなScratchJPユーザーが集う、Minecraftサーバーです！'
const repositoryUrl: string = "https://github.com/ScratchJP/mcscr.jp";

useSeoMeta({
  title,
  titleTemplate: "%s ┃ ScJPMCマイクラ鯖",
  description,
  ogTitle: title,
  ogDescription: description,
  // ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  // twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  // twitterCard: 'summary_large_image'
})

const items = ref<NavigationMenuItem[]>([
  {
    label: 'サーバー情報',
    to: '/about',
  },
  {
    label: '利用規約',
    to: 'https://scratchjp.notion.site/SCJPMinecraft-ce6cd3035a044758939b94355058ee77',
    target: "_blank",
  },
  {
    label: 'ホワイトリスト申請',
    to: 'https://discord.gg/EAKthfnZBu',
    target: "_blank",
  },
])
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/">
          ScJPマイクラ鯖
        </NuxtLink>

        <SeasonMenu />
      </template>

      <UNavigationMenu :items="items" content-orientation="vertical" />
      
      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          :to="repositoryUrl"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator>
      <span class="text-muted">
        Scratch JP Minecraft Server
      </span>
    </USeparator>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} <NuxtLink
            to="https://scratchjp.org"
            class="text-info hover:underline"
            target="_blank"
          >Scratch JP</NuxtLink>
        </p>
      </template>
      
      <UContainer>
        <UNavigationMenu :items="items" content-orientation="vertical" />
      </UContainer>
      
      <template #right>
        <UButton
          :to="repositoryUrl"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
