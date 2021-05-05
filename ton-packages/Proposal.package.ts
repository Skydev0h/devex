export default {"abi":{"ABI version":2,"header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"initProposal","inputs":[{"components":[{"name":"id","type":"uint32"},{"name":"start","type":"uint32"},{"name":"end","type":"uint32"},{"name":"title","type":"bytes"},{"name":"ts","type":"uint32"},{"name":"proposalType","type":"uint8"},{"name":"specific","type":"cell"}],"name":"proposalInfo","type":"tuple"},{"name":"padawanSI","type":"cell"}],"outputs":[]},{"name":"wrapUp","inputs":[],"outputs":[]},{"name":"voteFor","inputs":[{"name":"key","type":"uint256"},{"name":"choice","type":"bool"},{"name":"deposit","type":"uint32"}],"outputs":[]},{"name":"finalize","inputs":[{"name":"passed","type":"bool"}],"outputs":[]},{"name":"queryStatus","inputs":[],"outputs":[]},{"name":"getId","inputs":[],"outputs":[{"name":"id","type":"uint256"}]},{"name":"getVotingResults","inputs":[],"outputs":[{"components":[{"name":"id","type":"uint32"},{"name":"passed","type":"bool"},{"name":"votesFor","type":"uint32"},{"name":"votesAgainst","type":"uint32"},{"name":"totalVotes","type":"uint32"},{"name":"model","type":"uint8"},{"name":"ts","type":"uint32"}],"name":"vr","type":"tuple"}]},{"name":"getInfo","inputs":[],"outputs":[{"components":[{"name":"id","type":"uint32"},{"name":"start","type":"uint32"},{"name":"end","type":"uint32"},{"name":"title","type":"bytes"},{"name":"ts","type":"uint32"},{"name":"proposalType","type":"uint8"},{"name":"specific","type":"cell"}],"name":"info","type":"tuple"}]},{"name":"getCurrentVotes","inputs":[],"outputs":[{"name":"votesFor","type":"uint32"},{"name":"votesAgainst","type":"uint32"}]},{"name":"getProposalData","inputs":[],"outputs":[{"components":[{"name":"id","type":"uint32"},{"name":"start","type":"uint32"},{"name":"end","type":"uint32"},{"name":"title","type":"bytes"},{"name":"ts","type":"uint32"},{"name":"proposalType","type":"uint8"},{"name":"specific","type":"cell"}],"name":"info","type":"tuple"},{"components":[{"name":"state","type":"uint8"},{"name":"votesFor","type":"uint32"},{"name":"votesAgainst","type":"uint32"}],"name":"status","type":"tuple"}]},{"name":"_t1","inputs":[],"outputs":[{"name":"_t1","type":"uint256"}]},{"name":"_t2","inputs":[],"outputs":[{"name":"_t2","type":"uint256"}]},{"name":"_t3","inputs":[],"outputs":[{"name":"_t3","type":"uint256"}]},{"name":"_t4","inputs":[],"outputs":[{"name":"_t4","type":"uint256"}]}],"data":[{"key":1,"name":"_deployer","type":"address"}],"events":[{"name":"ProposalFinalized","inputs":[{"components":[{"name":"id","type":"uint32"},{"name":"passed","type":"bool"},{"name":"votesFor","type":"uint32"},{"name":"votesAgainst","type":"uint32"},{"name":"totalVotes","type":"uint32"},{"name":"model","type":"uint8"},{"name":"ts","type":"uint32"}],"name":"results","type":"tuple"}],"outputs":[]}]},"image":"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"}