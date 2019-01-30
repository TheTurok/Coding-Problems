/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root)
        return false;

    if(!root.left && !root.right)
        return true;

    return root.left.data == root.right.data &&
        mirror(root.left.left, root.right.right) &&
        mirror(root.left.right, root.right.left);

};

var mirror = function(left, right){
    if(!root.left && !root.right)
        return true;

    return left.data == right.data &&
        mirror(left.left, right.right) &&
        mirror(left.right, right.left);

}
