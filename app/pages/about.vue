<script setup lang="ts">
definePageMeta({
  title: 'サーバー情報',
})

const { data: rules } = await useAsyncData(() => queryCollection('content').path('/about/rules').first())
</script>

<template>
  <div>
    <UPageSection title="サーバールール" :ui="{
      container: 'text-black dark:text-white lg:pt-24'
    }">
      <template #description>
        <UContainer class="text-sm sm:text-base">
          <ContentRenderer :value="rules" v-if="rules" />
          <p v-else>サーバールールの読み込みに失敗しました；；</p>
        </UContainer>
      </template>
    </UPageSection>
  </div>
</template>
