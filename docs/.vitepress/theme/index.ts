import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import './style.css'

// Custom Components
import AnswerBox from './components/AnswerBox.vue'
import DiagnosticTool from './components/DiagnosticTool.vue'
import ClientMatrix from './components/ClientMatrix.vue'
import ProtocolGrid from './components/ProtocolGrid.vue'
import CompareTable from './components/CompareTable.vue'
import StepGuide from './components/StepGuide.vue'
import RelatedArticles from './components/RelatedArticles.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import ArticleMeta from './components/ArticleMeta.vue'
import InfoBox from './components/InfoBox.vue'
import WarningBox from './components/WarningBox.vue'
import SearchModal from './components/SearchModal.vue'
import SearchTrigger from './components/SearchTrigger.vue'
import AirportCard from './components/AirportCard.vue'
import AirportRankingTable from './components/AirportRankingTable.vue'
import ContextualRecommend from './components/ContextualRecommend.vue'
import CouponBox from './components/CouponBox.vue'
import AirportDetailHeader from './components/AirportDetailHeader.vue'
import SpeedtestViewer from './components/SpeedtestViewer.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('AnswerBox', AnswerBox)
    app.component('DiagnosticTool', DiagnosticTool)
    app.component('ClientMatrix', ClientMatrix)
    app.component('ProtocolGrid', ProtocolGrid)
    app.component('CompareTable', CompareTable)
    app.component('StepGuide', StepGuide)
    app.component('RelatedArticles', RelatedArticles)
    app.component('Breadcrumb', Breadcrumb)
    app.component('ArticleMeta', ArticleMeta)
    app.component('InfoBox', InfoBox)
    app.component('WarningBox', WarningBox)
    app.component('SearchModal', SearchModal)
    app.component('SearchTrigger', SearchTrigger)
    app.component('AirportCard', AirportCard)
    app.component('AirportRankingTable', AirportRankingTable)
    app.component('ContextualRecommend', ContextualRecommend)
    app.component('CouponBox', CouponBox)
    app.component('AirportDetailHeader', AirportDetailHeader)
    app.component('SpeedtestViewer', SpeedtestViewer)
  }
} satisfies Theme
