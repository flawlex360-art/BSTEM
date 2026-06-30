$images = Get-ChildItem -Path public\ -Filter *.jpg
foreach ($img in $images) {
    # Check if the file is tracked or untracked/modified
    $status = git status --porcelain $img.FullName
    if ($status) {
        git add $img.FullName
        git commit -m "Add image $($img.Name)"
        git push origin main
    }
}
