<script setup lang="ts">
definePageMeta({
  title: 'サーバー情報',
})

const { data: rules } = await useAsyncData(() => queryCollection('content').path('/about/rules').first())
</script>

<template>
  <UPage>
    <UPageBody>
      <UPageSection
        title="ScratchJPマインクラフトサーバーについて" 
        :ui="{
          container: 'text-black dark:text-white gap-2 sm:gap-4 py-4 sm:py-6 lg:py-8',
          description: 'text-default',
        }"
      >
        <template #description>
          <p>
            ScratchJPマインクラフトサーバーは、2023年3月30日に始動したMinecraftサーバーであり、<NuxtLink
              to="https://scratchjp.org"
              class="text-info hover:underline"
              target="_blank"
            >Scratch JP</NuxtLink>によって運営されています。
          </p>
          <p>
            シーズン制で運用されており、今のSeason IIは2026年1月3日にスタートしました。
          </p>
          <br />
          <p>バージョン: Java Edition 26.2</p>
        </template>
      </UPageSection>

      <UPageSection
        title="サーバールール" 
        :ui="{
          container: 'text-black dark:text-white gap-2 sm:gap-4 py-4 sm:py-6 lg:py-8',
        }"
      >
        <UContainer class="text-sm sm:text-base">
          <ContentRenderer v-if="rules" :value="rules" />
          <p v-else>サーバールールの読み込みに失敗しました；；</p>
        </UContainer>
      </UPageSection>
    </UPageBody>
  </UPage>
</template>
