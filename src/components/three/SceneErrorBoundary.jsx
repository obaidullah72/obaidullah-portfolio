import { Component } from 'react'

// If WebGL context creation or rendering throws, show the static fallback instead.
export default class SceneErrorBoundary extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}
