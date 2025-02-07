def sequence(x)
  (1..x).map(&:to_s).sort.map(&:to_i)
end

# describe 'Sample tests' do
#   it 'Sample test cases' do
#     expect(sequence(16)).to eq [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
#     expect(sequence(9)).to eq [1, 2, 3, 4, 5, 6, 7, 8, 9]
#   end
# end
