"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializer_1 = require("./serializer");
var Trie = (function () {
    function Trie(root) {
        if (root === void 0) { root = {}; }
        this.root = root;
    }
    Trie.deserialize = function (serialized) {
        var trie = new Trie();
        trie.root = serializer_1.deserialize(serialized);
        return trie;
    };
    Trie.fromArray = function (array) {
        var root = array.reduce(function (trie, word) {
            var node = trie;
            for (var index = 0; index < word.length; ++index) {
                var character = word[index];
                if (!node[character]) {
                    node[character] = {};
                }
                node = node[character];
            }
            node.wordEnd = true;
            return trie;
        }, {});
        return new Trie(root);
    };
    Trie.prototype.has = function (word) {
        var node = this.root;
        for (var index = 0; index < word.length; ++index) {
            var character = word[index];
            if (!node[character]) {
                return false;
            }
            node = node[character];
        }
        return node.wordEnd;
    };
    Trie.prototype.hasMore = function (word) {
        var node = this.root;
        for (var index = 0; index < word.length; ++index) {
            var character = word[index];
            if (!node[character]) {
                return false;
            }
            node = node[character];
        }
        return Object.keys(node).length > 0;
    };
    Trie.prototype.serialize = function () {
        return serializer_1.serialize(this.root);
    };
    Trie.prototype.toJson = function () {
        return this.root;
    };
    return Trie;
}());
module.exports = Trie;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFFdEQ7SUE2QkUsY0FBWSxJQUFTO1FBQVQscUJBQUEsRUFBQSxTQUFTO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUE5Qk0sZ0JBQVcsR0FBbEIsVUFBbUIsVUFBVTtRQUMzQixJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsd0JBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxjQUFTLEdBQWhCLFVBQWlCLEtBQUs7UUFDcEIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJO1lBQ25DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUVoQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDaEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUN0QjtnQkFFRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3hCO1lBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFcEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFUCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFNRCxrQkFBRyxHQUFILFVBQUksSUFBSTtRQUNOLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUU7WUFDaEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQkFBTyxHQUFQLFVBQVEsSUFBSTtRQUNWLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUU7WUFDaEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDRSxPQUFPLHNCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQkFBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VyaWFsaXplLCBkZXNlcmlhbGl6ZSB9IGZyb20gXCIuL3NlcmlhbGl6ZXJcIjtcblxuY2xhc3MgVHJpZSB7XG4gIHN0YXRpYyBkZXNlcmlhbGl6ZShzZXJpYWxpemVkKSB7XG4gICAgY29uc3QgdHJpZSA9IG5ldyBUcmllKCk7XG4gICAgdHJpZS5yb290ID0gZGVzZXJpYWxpemUoc2VyaWFsaXplZCk7XG4gICAgcmV0dXJuIHRyaWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3Qgcm9vdCA9IGFycmF5LnJlZHVjZSgodHJpZSwgd29yZCkgPT4ge1xuICAgICAgbGV0IG5vZGUgPSB0cmllO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgd29yZC5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gd29yZFtpbmRleF07XG5cbiAgICAgICAgaWYgKCFub2RlW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgICBub2RlW2NoYXJhY3Rlcl0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUgPSBub2RlW2NoYXJhY3Rlcl07XG4gICAgICB9XG5cbiAgICAgIG5vZGUud29yZEVuZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB0cmllO1xuICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBuZXcgVHJpZShyb290KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJvb3QgPSB7fSkge1xuICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gIH1cblxuICBoYXMod29yZCkge1xuICAgIGxldCBub2RlID0gdGhpcy5yb290O1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHdvcmQubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICBjb25zdCBjaGFyYWN0ZXIgPSB3b3JkW2luZGV4XTtcblxuICAgICAgaWYgKCFub2RlW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZVtjaGFyYWN0ZXJdO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlLndvcmRFbmQ7XG4gIH1cblxuICBoYXNNb3JlKHdvcmQpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMucm9vdDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB3b3JkLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgY29uc3QgY2hhcmFjdGVyID0gd29yZFtpbmRleF07XG4gICAgICBpZiAoIW5vZGVbY2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZVtjaGFyYWN0ZXJdO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhub2RlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIHJldHVybiBzZXJpYWxpemUodGhpcy5yb290KTtcbiAgfVxuXG4gIHRvSnNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb290O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJpZTtcbiJdfQ==