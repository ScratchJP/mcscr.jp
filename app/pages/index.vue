<script setup lang="ts">
definePageMeta({
  title: 'ホーム',
})
</script>

<template>
  <div>
    <UPageHero
      :ui="{
        container: 'lg:py-32'
      }"
      title="ScJPマイクラ鯖"
      description="ScJPマイクラ鯖は、設備やルールなどが充実した、愉快でフレンドリーなScratchJPユーザーが集う、Minecraftサーバーです！"
      :links="[{
        label: 'ホワイトリスト申請する',
        to: 'https://discord.gg/EAKthfnZBu',
        target: '_blank',
        trailingIcon: 'i-tabler-checkup-list',
        size: 'xl',
        class: 'rounded-full px-4',
      }]"
    >
      <template #links>
        <div>
          <UButton
            label="ホワイトリスト申請する"
            to="https://discord.gg/EAKthfnZBu"
            target="_blank"
            trailing-icon="i-tabler-checkup-list"
            size="xl"
            class="rounded-full px-4"
          />
          <p class="mt-2 text-sm text-muted">
            <NuxtLink
              to="https://scratchjp.org"
              class="text-info hover:underline"
              target="_blank"
            >Scratch JP</NuxtLink>のDiscordサーバーに参加し、Scratch認証を完了している必要があります。</p>
        </div>
      </template>
    </UPageHero>
  </div>
</template>
