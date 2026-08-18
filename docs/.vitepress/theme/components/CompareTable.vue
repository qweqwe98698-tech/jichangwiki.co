<template>
  <div class="compare-container">
    <div class="compare-table-wrapper">
      <table class="custom-compare-table">
        <thead>
          <tr>
            <th class="col-feature">{{ featureHeader || '对比维度' }}</th>
            <th class="col-a">{{ itemAHeader }}</th>
            <th class="col-b">{{ itemBHeader }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in rows" :key="idx">
            <td class="cell-feature">{{ row.feature }}</td>
            <td class="cell-a" v-html="row.valA"></td>
            <td class="cell-b" v-html="row.valB"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface CompareRow {
  feature: string
  valA: string
  valB: string
}

defineProps<{
  featureHeader?: string
  itemAHeader: string
  itemBHeader: string
  rows: CompareRow[]
}>()
</script>

<style scoped>
.compare-container {
  margin: 1.5rem 0;
}

.compare-table-wrapper {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid #1E2734;
  background: #11151A;
}

.custom-compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  margin: 0 !important;
}

.custom-compare-table th {
  background: #151A22;
  color: #FFFFFF;
  font-weight: 600;
  padding: 0.85rem 1rem;
  border-bottom: 2px solid #232D3C;
  border-top: none;
  border-left: none;
  border-right: none;
  text-align: left;
}

.col-feature {
  width: 25%;
  color: #94A3B8 !important;
}

.col-a {
  width: 37.5%;
  color: #00E5FF !important;
}

.col-b {
  width: 37.5%;
  color: #38BDF8 !important;
}

.custom-compare-table td {
  padding: 0.8rem 1rem;
  border-top: 1px solid #1A222E;
  border-bottom: none;
  border-left: none;
  border-right: none;
  background: #11151A;
  color: #CBD5E1;
  vertical-align: top;
  line-height: 1.6;
}

.cell-feature {
  font-weight: 600;
  color: #F1F5F9 !important;
  background: #131820 !important;
}

.custom-compare-table tr:hover td {
  background: #161D27 !important;
}
</style>
