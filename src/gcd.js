import React, { Component } from "react";

class GCD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factor1: [],
      factor2: [],
      commonFactor: [],
      gcd: 0
    };
    this.findGCD = this.findGCD.bind(this);
    this.calculateFactor = this.calculateFactor.bind(this);
    this.calculateFactorCommonFactor = this.calculateFactorCommonFactor.bind(
      this
    );
  }

  calculateFactor(n) {
    let f = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        f.push(i);
      }
    }
    this.setState({ factor1: f });
    return f;
  }

  calculateFactorCommonFactor(ff, sf) {
    let common = [];
    let c = ff.map(data => {
      if (sf.includes(data)) {
        common.push(data);
      }
    });
    return common;
  }

  findGCD() {
    let ff = this.calculateFactor(39);
    // console.log(`factor of 39 : ${ff}`);
    let sf = this.calculateFactor(57);
    // console.log(`factor of 57 : ${sf}`);
    let commonFactor = this.calculateFactorCommonFactor(ff, sf);
    // console.log(`commonfactor : ${commonFactor}`);
    let gcd = commonFactor.pop();
    // console.log(gcd);
    this.setState({ gcd: gcd });
  }
  render() {
    return (
      <div>
        <button onClick={this.findGCD}> onclick</button>
        {this.state.gcd !== 0 && <p>`${this.state.gcd}`</p>}
      </div>
    );
  }
}

export default GCD;
