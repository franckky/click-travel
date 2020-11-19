<template>
  <container>
    <ul id="example-1">
      <li v-for="destination in destinations" :key="destination.code">
        {{ destination.name }}
      </li>
    </ul>
  </container>
</template>
