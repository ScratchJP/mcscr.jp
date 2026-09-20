<script setup lang="ts">
definePageMeta({
  title: 'SCJP Minecraftサーバー利用規約',
  description: '',
})

const { data: page } = await useAsyncData(() => queryCollection('content').path('/terms').first())
</script>

<template>
  <UContainer class="text-sm sm:text-base text-start">
    <UPage 
      :ui="{
        root: 'px-4'
      }"
    >
      <UPageHeader 
        title="SCJP Minecraftサーバー利用規約" 
        :ui="{
          title: 'text-4xl md:text-5xl'
        }"
      />
      <UPageBody>
        <UContainer v-if="page">
          <UContentToc
            title="目次" 
            color="neutral"
            default-open
            :links="page.body.toc?.links" 
            :ui="{
              root: 'static bg-slate-50 dark:bg-slate-950 rounded-md px-0 sm:px-0 border border-slate-200/50',
              container: 'py-0 sm:py-0 lg:py-0 border-b-0',
              trigger: 'bg-slate-100 dark:bg-slate-900 px-4 sm:px-6 pt-4 pb-2 sm:pt-6 sm:pb-4',
              content: 'px-4 sm:px-6 py-2.5 sm:py-4.5 bg-slate-50 dark:bg-slate-950',
            }"
          />

          <ContentRenderer :value="page" />
        </UContainer>
        <UContainer v-else class="text-sm sm:text-base text-start">
          <p>
            利用規約の読み込みに失敗しました。ページの再読み込みをお試しください。
          </p>
        </UContainer>
      </UPageBody>
    </UPage>
  </UContainer>
</template>