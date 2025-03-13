<script lang="ts" setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup
    :item="{
      title: 'Dashboards',
      // badgeContent: '5',
      // badgeClass: 'bg-error',
      icon: 'ri-home-smile-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Analytics',
        to: '/dashboard',
      }"
    />

  </VerticalNavGroup>

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Apps & Pages',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Account Settings',
      icon: 'ri-user-settings-line',
      to: '/account-settings',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Login',
      icon: 'ri-login-box-line',
      to: '/login',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Register',
      icon: 'ri-user-add-line',
      to: '/register',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Error',
      icon: 'ri-information-line',
      to: '/no-existence',
    }"
  />

  <!-- 👉 UI Elements -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'UI Elements',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Typography',
      icon: 'ri-text',
      to: '/typography',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Icons',
      icon: 'ri-remixicon-line',
      to: '/icons',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Cards',
      icon: 'ri-bar-chart-box-line',
      to: '/cards',
    }"
  />

  <!-- 👉 Forms  -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Forms & Tables',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Layouts',
      icon: 'ri-layout-4-line',
      to: '/form-layouts',
    }"
  />



  <!-- 👉 Tables & Charts -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Tables & Charts',
    }"
  />

  <VerticalNavGroup
    :item="{
      title: 'Tables',
      icon: 'ri-table-alt-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Basic Tables',
        to: '/tables',
      }"
    />
  </VerticalNavGroup>


  <VerticalNavGroup
    :item="{
      title: 'Charts',
      icon: 'ri-bar-chart-2-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'ApexCharts',
        to: '/charts/apexcharts',
      }"
    />

    <VerticalNavLink
      :item="{
        title: 'Chartjs',
        to: '/charts/chartjs',
      }"
    />

    <VerticalNavLink
      :item="{
        title: 'Echarts',
        to: '/charts/echarts',
      }"
    />
  </VerticalNavGroup>
</template>
