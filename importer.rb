#!/usr/bin/env ruby

source_dir = "/Users/holger/projects/site/_posts"
target_dir = "/Users/holger/projects/gatsby-site/content/posts"

date_regex = /\d{4}-\d{2}-\d{2}+/
title_regex = /(?:\d-)*(([\D+-])+)(\.markdown)/
# first = Dir.children(source_dir).first
# puts first
# date = first.scan(date_regex)
# title = first.scan(title_regex)[0][0]
# puts title

Dir.children(source_dir).first do |child|
  date = child.scan(/[\d-]*/)
  title = child.scan(title_regex)[0][0]

  source_path = source_dir + "/" + child
  target_path = target_dir + "/" + title

  Dir.mkdir(target_path) unless Dir.exist?(target_path)
  FileUtils.cp(source_path, target_path + "/index.mdx")
end