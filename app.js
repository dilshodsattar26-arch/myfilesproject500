const coreManagerInstance = {
    version: "1.0.500",
    registry: [243, 1507, 1279, 1148, 1663, 1004, 1421, 1207],
    init: function() {
        const nodes = this.registry.filter(x => x > 314);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});