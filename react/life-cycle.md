# React life cycle 

https://www.mtosity.tech/posts/react-lifecycle-methods

## Mounting

* constructor(props)

* static getDerivedStateFromProps(props, state)

* render()

* componentDidMount()

## Updating

* static getDerivedStateFromProps(props, state)

* shouldComponentUpdate(nextProps, nextState)

* render()

* getSnapshotBeforeUpdate(prevProps, prevState)

* componentDidUpdate(prevProps, prevState, snapshot)

## Unmounting

* componentWillUnmount()
